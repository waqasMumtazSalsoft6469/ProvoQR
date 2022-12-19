import React, {useState} from 'react';
import {ImageBackground, View, Image} from 'react-native';
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

const RestaurantRequest = props => {
  const dispatch = useDispatch();
  const [restaurant_name, setRestaurantName] = useState();
  const [restaurant_address, setRestaurantAddress] = useState();
  const [description, setDescription] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [modal, setModal] = useState(false);

  handleDoneAddress = (address, latitude, longitude) => {
    setRestaurantAddress(address);
    setLatitude(latitude);
    setLongitude(longitude);
  };

  handleSubmit = () => {
    if (!restaurant_name) {
      showToast('Please Enter Restaurant Name');
    } else if (!restaurant_address) {
      showToast('Please Add Restaurant Address');
    } else if (!description) {
      showToast('Please Enter Description');
    } else {
      let data = {restaurant_name, restaurant_address, description};
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
        buttonTitle="Yes"
        onButtonPress={confirmYes}
      />
    </View>
  );
};

export default RestaurantRequest;
