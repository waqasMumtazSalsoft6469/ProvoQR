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

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }
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
                    style={styles.boxinput}
                    maxLength={1}
                    keyboardType="number-pad"
                    selectionColor={ThemeColors.primary}
                  />
                </View>
                <View style={[styles.box, {marginLeft: 3 * vw}]}>
                  <TextInput
                    style={styles.boxinput}
                    maxLength={1}
                    keyboardType="number-pad"
                    selectionColor={ThemeColors.primary}
                  />
                </View>
                <View style={[styles.box, {marginLeft: 3 * vw}]}>
                  <TextInput
                    style={styles.boxinput}
                    maxLength={1}
                    keyboardType="number-pad"
                    selectionColor={ThemeColors.primary}
                  />
                </View>
                <View style={[styles.box, {marginLeft: 3 * vw}]}>
                  <TextInput
                    style={styles.boxinput}
                    maxLength={1}
                    keyboardType="number-pad"
                    selectionColor={ThemeColors.primary}
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
              />
              <MainInput
                placeholder="Confirm Password"
                secureTextEntry={true}
                label="Confirm Password"
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
                  if (this.state.step == 3) {
                    this.props.navigation.navigate('Login');
                  } else {
                    this.setState({
                      step: this.state.step + 1,
                    });
                  }
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

export default SignupScreen;
