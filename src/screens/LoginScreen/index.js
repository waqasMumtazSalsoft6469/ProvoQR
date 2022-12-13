import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainInput from '../../components/Input/MainInput';
import {vh, vw} from '../../Utils/Units';
import Button from '../../components/Buttons/SimpleButton';
import RubikRegular from '../../components/Text/RubikRegular';
import Dash from 'react-native-dash';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import ImageButton from '../../components/Buttons/ImageButton';
import ThemeColors from '../../Utils/ThemeColors';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitLightText from '../../components/Text/OutfitLightText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import {connect} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import SignupScreen from '../SignupScreen';
import {showToast} from '../../Api/HelperFunction';
import {login, userSignup} from '../../Redux/Actions/authActions';

const initialState = {
  name: '',
  email: '',
  password: '',
  confpw: '',
  phone: '',
  address: 'null',
  image: '',
  formOption: 'Login',
  visible: false,
};

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('blur', () => {
      this.setState(initialState);
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  handleLogin = () => {
    const {email, password} = this.state;
    if (!email || !password) {
      showToast('Please enter email addres');
    } else if (!password) {
      showToast('Please enter password');
    } else if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      showToast('Please insert valid email address');
    } else {
      let data = {
        email: email,
        password: password,
        device_type: Platform.OS,
        device_token: 'token',
      };
      this.props
        .login(data)
        .then(res => {
          console.log(res?.user?.age, 'LOGIN RESPONSE');
          if (res?.success) {
            showToast('Login Successfull!');
            if (!res?.user?.age || !res?.user?.gender || !res?.user?.address) {
              this.props.navigation.navigate('CompleteProfile');
            }
            // else {
            //   this.props.navigation.navigate('DrawerStack');
            // }
          }
        })
        .catch(e => showToast(e));
    }
  };

  parseImage = image => {
    console.log(image, 'IMAGES');
    return new Promise((resolve, reject) => {
      const data = {};
      Object.keys(image).map((key, index) => {
        data[`image[${index}][${key}]`] = image[key];
      });
      resolve(data);
    });
  };

  handleSignUp = async () => {
    const {name, email, password, confpw, phone, address, image} = this.state;
    if (!name) {
      showToast('Please enter your full name');
    } else if (!email) {
      showToast('Please enter your email address');
    } else if (!password) {
      showToast('Please enter password');
    } else if (!confpw) {
      showToast('Please enter confirm password');
    } else if (!phone) {
      showToast('Please enter your phone number');
    } else if (!address) {
      showToast('Please select your location address');
    } else if (!image) {
      showToast('Please select profile image');
    } else if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      showToast('Please insert valid email address');
    } else if (password != confpw) {
      showToast('Password and confirm password should be same.');
    } else {
      let _image = null;
      if (image) {
        let splittedUri = image?.split('.');
        _image = {
          uri: image,
          type: `image/${splittedUri[splittedUri?.length - 1]}`,
          name: `profileImage.${splittedUri[splittedUri?.length - 1]}`,
        };
      }
      const images = await this.parseImage(_image);
      let data = {
        full_name: name,
        email: email,
        address: address,
        phone: phone,
        password: password,
        password_confirmation: confpw,
        ...images,
      };
      this.props.signup(data).then(res => {
        if (res?.success) {
          showToast(res?.message);
          this.props.navigation.navigate('Subscription', {token: res?.token});
          // this.setState({formOption: 'Login'});
        }
      });
    }
  };
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
      this.setState({image: data.assets[0].uri, visible: false});
    }
  };

  renderLogin = () => {
    return (
      <KeyboardAwareScrollView>
        <View
          style={{
            alignItems: 'center',
            marginTop: 5 * vh,
            paddingHorizontal: vw * 2,
          }}>
          <MainInput
            placeholder="Enter Email Address"
            // style={styles.field}
            ref={r => (this.email = r)}
            onSubmitEditing={() => this.pw.onFocus()}
            onChangeText={newemail =>
              this.setState({
                email: newemail,
              })
            }
            keyboardType="email-address"
            value={this.state.email}
            label="Email Address"
            autoCapitalize="none"
          />
          <MainInput
            placeholder="Enter Password"
            // style={styles.field}
            ref={r => (this.pw = r)}
            onSubmitEditing={() => this.pw.onFocus()}
            onChangeText={newemail =>
              this.setState({
                password: newemail,
              })
            }
            autoCapitalize="none"
            secureTextEntry
            value={this.state.password}
            label="Password"
          />
          <TouchableHOC
            style={styles.forgotButton}
            onPress={() => this.props.navigation.navigate('PasswordRecovery')}>
            <OutfitLightText style={styles.forgotText}>
              Forgot Passsword?
            </OutfitLightText>
          </TouchableHOC>

          <Button
            title="LOGIN"
            onPress={() => this.handleLogin()}
            btnContainer={{marginTop: 2 * vh}}
          />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={{
                // marginLeft: 7 * vw,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // height: 8 * vh,
                marginTop: 4 * vh,
              }}>
              <Dash
                style={{
                  width: 30 * vw,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                dashColor="#2A2A2A"
                dashLength={2}
                dashGap={0.5 * vh}
                dashStyle={{width: 0.5 * vw}}></Dash>

              <OutfitSemiBoldText style={styles.or}>OR</OutfitSemiBoldText>
              <Dash
                style={{
                  width: 30 * vw,
                  marginLeft: 4 * vw,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                dashColor="#2A2A2A"
                dashLength={2}
                dashGap={0.5 * vh}
                dashStyle={{width: 0.5 * vw}}></Dash>
            </View>
          </View>
          <View style={{marginTop: 4 * vh}}>
            <ImageButton
              title={'Continue With Google'}
              stylecon={styles.googlebox}
              labelstyle={styles.label}
              image={icons.google}
            />

            <ImageButton
              title={'Continue With Facebook'}
              stylecon={[
                styles.googlebox,
                {
                  backgroundColor: '#375FB4',
                  borderColor: '#375FB4',
                  marginTop: 2 * vh,
                },
              ]}
              labelstyle={[
                styles.label,
                {color: ThemeColors.white, marginLeft: 2 * vw},
              ]}
              image={icons.fb}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 8 * vh,
              justifyContent: 'center',
            }}>
            <OutfitRegularText style={styles.account}>
              Don't have an account?
            </OutfitRegularText>
            <TouchableHOC onPress={() => this.setState({formOption: 'Signup'})}>
              <OutfitRegularText style={styles.createaccount}>
                Sign Up Here
              </OutfitRegularText>
            </TouchableHOC>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  };
  renderSignup = () => {
    return (
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 5 * vh,
            paddingHorizontal: vw * 2,
          }}>
          <ImageBackground
            source={
              this.state.image ? {uri: this.state.image} : icons.purpleprofile
            }
            style={[
              styles.profile,
              {alignItems: 'flex-end', justifyContent: 'flex-end'},
            ]}
            imageStyle={styles.profile}>
            <TouchableOpacity
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
              onPress={() => this.setState({visible: !this.state.visible})}
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
            placeholder="Enter Full Name"
            // style={styles.field}
            ref={r => (this.name = r)}
            onSubmitEditing={() => this.semail.onFocus()}
            onChangeText={newemail =>
              this.setState({
                name: newemail,
              })
            }
            value={this.state.name}
            autoCapitalize="words"
            label="Full Name"
          />

          <MainInput
            placeholder="Enter Email Address"
            // style={styles.field}
            ref={r => (this.semail = r)}
            onSubmitEditing={() => this.phone.onFocus()}
            onChangeText={newemail =>
              this.setState({
                email: newemail,
              })
            }
            keyboardType="email-address"
            value={this.state.email}
            label="Email Address"
            autoCapitalize="none"
          />
          <MainInput
            placeholder="Enter Phone Number"
            // style={styles.field}
            ref={r => (this.phone = r)}
            keyboardType="phone-pad"
            onSubmitEditing={() => this.sPass.onFocus()}
            onChangeText={newemail =>
              this.setState({
                phone: newemail,
              })
            }
            value={this.state.phone}
            maxLength={16}
            label="Phone Number"
            autoCapitalize="none"
          />
          <MainInput
            placeholder="Enter Password"
            // style={styles.field}
            ref={r => (this.sPass = r)}
            onSubmitEditing={() => this.cPass.onFocus()}
            onChangeText={newemail =>
              this.setState({
                password: newemail,
              })
            }
            secureTextEntry
            label="Password"
            value={this.state.password}
            autoCapitalize="none"
          />

          <MainInput
            placeholder="Confirm Password"
            // style={styles.field}
            ref={r => (this.cPass = r)}
            // onSubmitEditing={() => this.props.navigation.navigate('Location')}
            onChangeText={newemail =>
              this.setState({
                confpw: newemail,
              })
            }
            value={this.state.confpw}
            secureTextEntry
            // value={this.state.password}
            label="Confirm Password"
            autoCapitalize="none"
          />

          {/* <View>
            <View style={[styles.labelview]}>
              <OutfitMediumText style={[styles.label]}>
                {'Location'}
              </OutfitMediumText>
            </View>
            <TouchableHOC
              style={styles.fieldContainer}
              onPress={() => this.props.navigation.navigate('Location')}>
              <OutfitRegularText style={styles.gender}>
                Enter Location
              </OutfitRegularText>
              <Image source={icons.loc} style={styles.down} />
            </TouchableHOC>
          </View> */}

          <Button
            title="CONTINUE"
            onPress={() => this.handleSignUp()}
            btnContainer={styles.signupBtn}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 4 * vh,
              marginBottom: 4 * vh,
              justifyContent: 'center',
            }}>
            <OutfitRegularText style={styles.account}>
              Don't have an account?
            </OutfitRegularText>
            <TouchableHOC onPress={() => this.setState({formOption: 'Login'})}>
              <OutfitRegularText style={styles.createaccount}>
                Log In Here
              </OutfitRegularText>
            </TouchableHOC>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.bgimage}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={styles.imgbg}>
          <View style={styles.options}>
            <TouchableHOC
              style={
                this.state.formOption === 'Login'
                  ? styles.darkButton
                  : styles.lightButton
              }
              onPress={() => this.setState({formOption: 'Login'})}>
              <OutfitMediumText
                style={{
                  color:
                    this.state.formOption === 'Login'
                      ? ThemeColors.white
                      : ThemeColors.fontBlack,
                }}>
                LOGIN
              </OutfitMediumText>
            </TouchableHOC>
            <TouchableHOC
              style={
                this.state.formOption === 'Signup'
                  ? styles.darkButton
                  : styles.lightButton
              }
              onPress={() => this.setState({formOption: 'Signup'})}>
              <OutfitMediumText
                style={{
                  color:
                    this.state.formOption === 'Signup'
                      ? ThemeColors.white
                      : ThemeColors.fontBlack,
                }}>
                SIGN UP
              </OutfitMediumText>
            </TouchableHOC>
          </View>
          {this.state.formOption === 'Login'
            ? this.renderLogin()
            : this.renderSignup()}
        </ImageBackground>
        <Modal
          visible={this.state.visible}
          animationType={'slide'}
          transparent={true}>
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
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // count: state.count,
});
const mapDispatchToProps = dispatch => {
  return {
    // explicitly forwarding arguments
    login: data => dispatch(login(data)),
    signup: data => dispatch(userSignup(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
