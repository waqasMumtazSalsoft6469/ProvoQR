import React from 'react';
import {Button, ImageBackground, View, TextInput, Image} from 'react-native';
import styles from './styles';
import {backgrounds, icons} from '../../assets/images';
import {vw, vh} from '../../Utils/Units';
import MainInput from '../../components/Input/MainInput';
import RubikRegular from '../../components/Text/RubikRegular';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SolidButton from '../../components/Buttons/SimpleButton';
import ThemeColors from '../../Utils/ThemeColors';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import {
  sendEmail,
  setPassword,
  verifyOTP,
} from '../../Redux/Actions/authActions';
import {showToast} from '../../Api/HelperFunction';
import {connect} from 'react-redux';

class PasswordRecovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      email: '',
      code: null,
      password: '',
      password_confirmation: '',
    };
  }

  handleEmail = () => {
    if (!this.state.email) {
      showToast('Please enter your email address');
      return;
    }
    if (
      !this.state.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      showToast('Please insert valid email address');
      return;
    }
    this.props.sendEmail({email: this.state.email}).then(res => {
      this.setState({
        step: this.state.step + 1,
      });
    });
  };
  handleCode = () => {
    if (!this.state.code || this.state.code.length < 4) {
      showToast('Please Enter Valid Code');
    } else {
      this.props
        .confirmCode({email: this.state.email, code: this.state.code})
        .then(res => {
          this.setState({
            step: this.state.step + 1,
          });
        });
    }
  };
  handlePassword = () => {
    if (!this.state.password || !this.state.password_confirmation) {
      showToast('Please Enter Both Password');
    } else if (this.state.password != this.state.password_confirmation) {
      showToast('Password and Confirm Password should be same');
    } else {
      let data = {
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        email: this.state.email,
      };
      this.props.setNewPassword(data).then(res => {
        this.props.navigation.navigate('Login');
      });
    }
  };

  handlePress = () => {
    const {step} = this.state;
    if (step == 1) {
      this.handleEmail();
    } else if (step == 2) {
      this.handleCode();
    } else {
      this.handlePassword();
    }
  };

  renderBody = () => {
    switch (this.state.step) {
      case 1:
        return (
          <>
            <View style={{alignItems: 'center'}}>
              <OutfitRegularText style={styles.subTitle}>
                Please Enter Your Email Address To Receive Verification
              </OutfitRegularText>
              <MainInput
                placeholder="Enter Email Address"
                keyboardType="email-address"
                label="Email Address"
                autoCapitalize="none"
                onChangeText={newemail =>
                  this.setState({
                    email: newemail,
                  })
                }
              />
            </View>
          </>
        );
        break;
      case 2:
        return (
          <>
            <View style={{alignItems: 'center'}}>
              <OutfitRegularText style={styles.subTitle}>
                Please Enter Verification Code Sent To Your Email
              </OutfitRegularText>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.box}>
                  <TextInput
                    ref={r => (this.c1 = r)}
                    style={styles.boxinput}
                    maxLength={1}
                    keyboardType="number-pad"
                    selectionColor={ThemeColors.primary}
                    onChangeText={newemail => {
                      this.setState(prevState => {
                        return {
                          ...prevState,
                          code: prevState.code + newemail,
                        };
                      });
                      if (value) this.c2.focus();
                    }}
                  />
                </View>
                <View style={[styles.box, {marginLeft: 3 * vw}]}>
                  <TextInput
                    ref={r => (this.c2 = r)}
                    style={styles.boxinput}
                    maxLength={1}
                    keyboardType="number-pad"
                    selectionColor={ThemeColors.primary}
                    onChangeText={newemail => {
                      this.setState(prevState => {
                        return {
                          ...prevState,
                          code: prevState.code + newemail,
                        };
                      });
                      if (value) this.c3.focus();
                    }}
                  />
                </View>
                <View style={[styles.box, {marginLeft: 3 * vw}]}>
                  <TextInput
                    ref={r => (this.c3 = r)}
                    style={styles.boxinput}
                    maxLength={1}
                    keyboardType="number-pad"
                    selectionColor={ThemeColors.primary}
                    onChangeText={newemail => {
                      this.setState(prevState => {
                        return {
                          ...prevState,
                          code: prevState.code + newemail,
                        };
                      });
                      if (value) this.c4.focus();
                    }}
                  />
                </View>
                <View style={[styles.box, {marginLeft: 3 * vw}]}>
                  <TextInput
                    ref={r => (this.c4 = r)}
                    style={styles.boxinput}
                    maxLength={1}
                    keyboardType="number-pad"
                    selectionColor={ThemeColors.primary}
                    onChangeText={newemail =>
                      this.setState(prevState => {
                        return {
                          ...prevState,
                          code: prevState.code + newemail,
                        };
                      })
                    }
                  />
                </View>
              </View>
              <TouchableHOC style={styles.forgotButton}>
                <RubikRegular style={styles.resetButton}>
                  Resend Code
                </RubikRegular>
              </TouchableHOC>
            </View>
          </>
        );
        break;

      case 3:
        return (
          <>
            <View style={{alignItems: 'center'}}>
              <OutfitRegularText style={styles.subTitle}>
                Please Reset Your Password
              </OutfitRegularText>
              <MainInput
                placeholder="Enter New Password"
                secureTextEntry={true}
                label="New Password"
                onChangeText={newemail =>
                  this.setState({
                    password: newemail,
                  })
                }
              />
              <MainInput
                placeholder="Confirm Password"
                secureTextEntry={true}
                label="Confirm Password"
                onChangeText={newemail =>
                  this.setState({
                    password_confirmation: newemail,
                  })
                }
              />
            </View>
          </>
        );
        break;
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView style={{}}>
          <ImageBackground
            source={backgrounds.bgimage}
            style={styles.BGimage}
            imageStyle={styles.bg}
            resizeMode="cover">
            <OutfitSemiBoldText style={styles.forgotText}>
              Forgot Password
            </OutfitSemiBoldText>
            {this.renderBody()}

            <View style={{alignItems: 'center', marginTop: 5 * vh}}>
              <SolidButton
                title={this.state.step == 3 ? 'UPDATE' : 'CONTINUE'}
                onPress={() => {
                  this.handlePress();
                }}
              />
              <TouchableHOC
                onPress={() => this.props.navigation.navigate('Login')}>
                <RubikRegular style={styles.createaccount}>
                  Back To Login
                </RubikRegular>
              </TouchableHOC>
            </View>
          </ImageBackground>
        </KeyboardAwareScrollView>
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
    sendEmail: data => dispatch(sendEmail(data)),
    confirmCode: data => dispatch(verifyOTP(data)),
    setNewPassword: data => dispatch(setPassword(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecovery);
