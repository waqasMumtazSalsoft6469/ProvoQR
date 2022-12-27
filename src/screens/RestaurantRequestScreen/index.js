import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainInput from '../../components/Input/MainInput';
import {vh, vw} from '../../Utils/Units';
import Button from '../../components/Buttons/SimpleButton';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import {showToast} from '../../Api/HelperFunction';
import {useDispatch} from 'react-redux';
import {addRestaurantRequest} from '../../Redux/Actions/otherActions';
import AlertModal from '../../components/Popups/alertModal';
import ThemeColors from '../../Utils/ThemeColors';
import {CommonActions} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const RestaurantRequest = props => {
  const dispatch = useDispatch();
  const [restaurant_name, setRestaurantName] = useState();
  const [restaurant_address, setRestaurantAddress] = useState();
  const [description, setDescription] = useState();
  const [lat, setLatitude] = useState();
  const [lng, setLongitude] = useState();
  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);

  handleDoneAddress = (address, latitude, longitude) => {
    setRestaurantAddress(address);
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const choices = [
    {
      name: 'Camera',
      onClick: () => {
        onSelectCamera('capture', {quality: 0.001});
      },
    },
    {
      name: 'Gallery',
      onClick: () => {
        onSelectGallary('gallery', {quality: 0.001});
      },
    },
  ];

  const onSelectCamera = (options, img) => {
    setVisible(false);
    launchCamera(options, img => imgs(img));
  };
  const onSelectGallary = (options, img) => {
    setVisible(false);
    launchImageLibrary(options, img => imgs(img));
  };
  const imgs = data => {
    if (data?.assets != null) {
      setVisible(false);
      setImage(data.assets[0].uri);
    }
  };

  handleSubmit = () => {
    if (!image) {
      showToast('Please Select Restaurant Image');
    } else if (!restaurant_name) {
      showToast('Please Enter Restaurant Name');
    } else if (!restaurant_address) {
      showToast('Please Add Restaurant Address');
    } else if (!description) {
      showToast('Please Enter Description');
    } else {
      let _image = null;
      let profileImg = {};
      if (image) {
        let splittedUri = image?.split('.');
        _image = {
          uri: image,
          type: `image/${splittedUri[splittedUri?.length - 1]}`,
          name: `restaurantImage.${splittedUri[splittedUri?.length - 1]}`,
        };
      }
      profileImg[`image`] = _image;
      let data = {
        restaurant_name,
        restaurant_address,
        description,
        lat,
        lng,
        ...profileImg,
      };
      dispatch(addRestaurantRequest(data)).then(res => {
        // showToast(res?.message);
        setModal(true);
      });
    }
  };

  confirmYes = () => {
    setModal(false);
    props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Home'}],
      }),
    );
    // props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={{width: 100 * vw}}>
          <View style={{alignItems: 'center', marginTop: 5 * vh}}>
            <OutfitSemiBoldText style={{fontSize: vh * 2.5}}>
              Restaurant Request
            </OutfitSemiBoldText>
            <ImageBackground
              source={image ? {uri: image} : icons.purpleprofile}
              style={[
                styles.profile,
                {
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  marginTop: vh * 2,
                },
              ]}
              imageStyle={styles.profile}>
              <TouchableOpacity
                hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
                onPress={() => setVisible(true)}
                style={{
                  width: 7 * vw,
                  height: 7 * vw,
                  backgroundColor: ThemeColors.primary,

                  justifyContent: 'center',

                  borderRadius: 3.5 * vh,

                  alignItems: 'center',
                  // left: I18nManager.isRTL ? 38 * vw : 0
                }}>
                <Image
                  source={icons.camera}
                  resizeMode="contain"
                  style={{width: 3 * vw, height: 3 * vw}}
                />
              </TouchableOpacity>
            </ImageBackground>
            <MainInput
              placeholder="Enter Restaurant Name"
              onChangeText={newemail => setRestaurantName(newemail)}
              defaultValue={restaurant_name}
              label="Restaurant Name"
            />
            <View>
              <View style={styles.labelview}>
                <OutfitMediumText style={styles.label}>
                  Location
                </OutfitMediumText>
              </View>
              <View style={{alignItems: 'center'}}>
                <TouchableHOC
                  style={styles.fieldContainer}
                  onPress={() =>
                    props.navigation.navigate('Location', {
                      handleDoneAddress: handleDoneAddress,
                    })
                  }>
                  <OutfitRegularText
                    style={[
                      styles.gender,
                      restaurant_address && {color: ThemeColors.fontBlack},
                    ]}
                    numberOfLines={1}>
                    {restaurant_address ?? 'Enter Location'}
                  </OutfitRegularText>
                  <Image source={icons.loc} style={styles.down} />
                </TouchableHOC>
              </View>
            </View>

            <MainInput
              placeholder="Description"
              ref={r => (this.email = r)}
              // onSubmitEditing={() => this.pw.onFocus()}
              onChangeText={newemail => setDescription(newemail)}
              defaultValue={description}
              label="Enter Description"
              multiline
              style={styles.description}
            />

            <Button
              title="Submit"
              btnContainer={{marginTop: 2 * vh}}
              onPress={handleSubmit}
            />
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
      <AlertModal
        visible={modal}
        setVisible={() => setModal(false)}
        icon={icons.popupTick}
        title={''}
        description={'Restaurant request has been submit successfully'}
        buttonTitle="OK"
        onButtonPress={confirmYes}
      />
      <Modal visible={visible} animationType={'slide'} transparent={true}>
        <View style={styles.modal}>
          {choices.map((item, index) => {
            return (
              <>
                <TouchableHOC
                  onPress={item?.onClick}
                  style={{marginLeft: vw * 2}}>
                  <OutfitRegularText
                    style={{
                      color: 'black',
                      fontSize: vh * 2.2,
                    }}>
                    {item?.name}
                  </OutfitRegularText>
                </TouchableHOC>
                {index < choices.length - 1 && <View style={styles.line} />}
              </>
            );
          })}
        </View>
      </Modal>
    </View>
  );
};

export default RestaurantRequest;
