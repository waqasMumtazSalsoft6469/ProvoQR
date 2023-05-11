import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import RubikLight from '../../components/Text/RubikLight';
import RubikRegular from '../../components/Text/RubikRegular';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainInput from '../../components/Input/MainInput';
import {vh, vw} from '../../Utils/Units';
import ThemeColors from '../../Utils/ThemeColors';
import Button from '../../components/Buttons/SimpleButton';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import {editProfile} from '../../Redux/Actions/authActions';
import {imageUrl} from '../../Api/configs';
import {connect} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {showToast} from '../../Api/HelperFunction';

class EditProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      phone: '',
      gender: '',
      address: '',
      image: '',
      selectedImage: '',
      visible: false,
    };
  }

  componentDidMount() {
    const {name, age, phone, gender, address, image} = this.props.userData;
    console.log(this.props.userData);
    this.setState({name, age, phone, gender, address, image});
  }

  choices = [
    {
      name: 'Camera',
      onClick: () => {
        this.onSelectCamera('capture', {quality: 0.001});
      },
    },
    {
      name: 'Gallery',
      onClick: () => {
        this.onSelectGallary('gallery', {quality: 0.001});
      },
    },
  ];
  onSelectCamera = (options, img) => {
    this.setState({visible: false});
    launchCamera(options, img => this.img(img));
  };
  onSelectGallary = (options, img) => {
    this.setState({visible: false});
    launchImageLibrary(options, img => this.img(img));
  };
  img = data => {
    if (data?.assets != null) {
      this.setState({
        selectedImage: data.assets[0].uri,
        image: data.assets[0].uri,
        visible: false,
      });
    }
  };

  // parseImage = image => {
  //   return new Promise((resolve, reject) => {
  //     const data = {};
  //     Object.keys(image).map((key, index) => {
  //       data[`image[0][${key}]`] = image[key];
  //     });
  //     resolve(data);
  //   });
  // };

  handleUpdate = async () => {
    const {name, phone, address, image, age, gender, selectedImage} =
      this.state;
    if (!name) {
      showToast('Please enter your full name');
    } else if (!phone) {
      showToast('Please enter your phone number');
    } else if (!address) {
      showToast('Please select your location address');
    }
    // else if (!image) {
    //   showToast('Please select profile image');
    // }
    else {
      data = {
        name: name,
        address: address,
        phone: phone,
        age: age,
        gender: gender,
      };

      let _image = null;

      if (selectedImage) {
        let splittedUri = selectedImage?.split('.');
        _image = {
          uri: selectedImage,
          type: `image/${splittedUri[splittedUri?.length - 1]}`,
          name: `profileImage.${splittedUri[splittedUri?.length - 1]}`,
        };
        data.image = _image;
      }

      // data = {};
      // let profileImg = {};
      // if (selectedImage) {
      //   let splittedUri = selectedImage?.split('.');
      //   _image = {
      //     uri: selectedImage,
      //     type: `image/${splittedUri[splittedUri?.length - 1]}`,
      //     name: `profileImage.${splittedUri[splittedUri?.length - 1]}`,
      //   };
      // }
      // profileImg[`image`] = _image;
      // if (selectedImage) {
      //   data = {
      //     name: name,
      //     address: address,
      //     phone: phone,
      //     ...profileImg,
      //     age: age,
      //     gender: gender,
      //   };
      // } else {
      //   data = {
      //     name: name,
      //     address: address,
      //     phone: phone,
      //     image: image,
      //     age: age,
      //     gender: gender,
      //   };
      // }

      this.props.editProfile(data).then(res => {
        if (res?.success) {
          showToast(res?.message);
          this.props.navigation.goBack();
          // this.setState({formOption: 'Login'});
        }
      });
    }
  };

  handleDoneAddress = (address, latitude, longitude) => {
    this.setState({address: address});
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={{width: 100 * vw}}>
          <KeyboardAwareScrollView>
            <View style={{marginTop: 5 * vh, paddingHorizontal: 4 * vw}}>
              <View style={{alignItems: 'center'}}>
                <ImageBackground
                  source={
                    this.state.selectedImage
                      ? {uri: this.state.selectedImage}
                      : this.state.image
                      ? {
                          uri: imageUrl + this.state.image,
                        }
                      : icons.purpleprofile
                  }
                  resizeMode="cover"
                  style={[
                    styles.profile,
                    {alignItems: 'flex-end', justifyContent: 'flex-end'},
                  ]}
                  imageStyle={styles.profile}>
                  <TouchableOpacity
                    hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
                    style={{
                      width: 7 * vw,
                      height: 7 * vw,
                      backgroundColor: ThemeColors.primary,
                      justifyContent: 'center',
                      borderRadius: 3.5 * vh,
                      alignItems: 'center',
                    }}
                    onPress={() => this.setState({visible: true})}>
                    <Image
                      source={icons.camera}
                      resizeMode="contain"
                      style={{width: 3 * vw, height: 3 * vw}}
                    />
                  </TouchableOpacity>
                </ImageBackground>
                <MainInput
                  placeholder="Enter Full Name"
                  // style={styles.field}
                  ref={r => (this.email = r)}
                  // onSubmitEditing={() => this.pw.onFocus()}
                  onChangeText={newemail =>
                    this.setState({
                      name: newemail,
                    })
                  }
                  value={this.state.name}
                  label="Name"
                />
              </View>

              <View
                style={{
                  marginTop: 3 * vh,
                  paddingHorizontal: 8 * vw,
                  marginBottom: vh,
                }}>
                <OutfitMediumText style={styles.emailtext}>
                  Email Address
                </OutfitMediumText>
                <OutfitRegularText style={styles.email}>
                  {this.props.userData?.email}
                </OutfitRegularText>
              </View>
              <View style={{alignItems: 'center'}}>
                <MainInput
                  placeholder="Enter Phone"
                  // style={styles.field}
                  ref={r => (this.email = r)}
                  // onSubmitEditing={() => this.pw.onFocus()}
                  onChangeText={newemail =>
                    this.setState({
                      phone: newemail,
                    })
                  }
                  value={this.state.phone}
                  label="Phone Number"
                />
                <View style={[styles.labelview]}>
                  <OutfitMediumText style={[styles.label]}>
                    Address
                  </OutfitMediumText>
                </View>

                <TouchableHOC
                  style={styles.fieldContainer}
                  onPress={() =>
                    this.props.navigation.navigate('Location', {
                      handleDoneAddress: this.handleDoneAddress,
                    })
                  }>
                  <OutfitRegularText
                    style={[
                      styles.gender,
                      this.state.address && {color: ThemeColors.fontBlack},
                    ]}
                    numberOfLines={1}>
                    {this.state.address ?? 'Enter Location'}
                  </OutfitRegularText>
                  <Image source={icons.loc} style={styles.down} />
                </TouchableHOC>
                {/* <MainInput
                  placeholder="Enter Gender"
                  // style={styles.field}
                  ref={r => (this.email = r)}
                  // onSubmitEditing={() => this.pw.onFocus()}
                  onChangeText={newemail =>
                    this.setState({
                      gender: newemail,
                    })
                  }
                  value={this.state.gender}
                  label="Gender"
                /> */}
                {/* <MainInput
                  placeholder="Enter Address"
                  // style={styles.field}
                  ref={r => (this.email = r)}
                  // onSubmitEditing={() => this.pw.onFocus()}
                  onChangeText={newemail =>
                    this.setState({
                      address: newemail,
                    })
                  }
                  value={this.state.address}
                  label="Address"
                /> */}
              </View>
            </View>

            <View style={{alignItems: 'center', marginBottom: 2 * vh}}>
              <Button
                title="UPDATE"
                btnContainer={{
                  marginTop: 2 * vh,
                  paddingHorizontal: 6 * vw,
                  width: 40 * vw,
                  height: 6 * vh,
                }}
                onPress={this.handleUpdate}
              />
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
        <Modal
          visible={this.state.visible}
          animationType={'slide'}
          transparent={true}
          style={{flex: 1}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.setState({visible: false})}
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'flex-end',
            }}>
            <View style={styles.modal}>
              {this.choices.map((item, index) => {
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
                    {index < this.choices.length - 1 && (
                      <View style={styles.line} />
                    )}
                  </>
                );
              })}
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.SessionReducer.userData,
});
const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    editProfile: data => dispatch(editProfile(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen);
