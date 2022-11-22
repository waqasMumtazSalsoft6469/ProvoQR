import React from 'react';
import {ImageBackground, View, Image, TouchableOpacity} from 'react-native';
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

import SignupScreen from '../SignupScreen';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confpw: '',
      formOption: 'Login',
    };
  }

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
            // onSubmitEditing={() => this.pw.onFocus()}
            // onChangeText={(newemail) =>
            //   this.setState({
            //     email: newemail,
            //   })
            // }
            keyboardType="email-address"
            // value={this.state.email}
            label="Email Address"
          />
          <MainInput
            placeholder="Enter Password"
            // style={styles.field}
            ref={r => (this.name = r)}
            // onSubmitEditing={() => this.pw.onFocus()}
            // onChangeText={(newemail) =>
            //   this.setState({
            //     email: newemail,
            //   })
            // }
            secureTextEntry
            // value={this.state.password}
            label="Password"
          />
          <TouchableHOC
            style={styles.forgotButton}
            onPress={() => this.props.navigation.navigate('PasswordRecovery')}>
            <OutfitLightText style={styles.forgotText}>
              Forgot Password?
            </OutfitLightText>
          </TouchableHOC>

          <Button
            title="LOGIN"
            onPress={() => this.props.navigation.navigate('SocialLogin')}
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
            source={icons.purpleprofile}
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
            ref={r => (this.email = r)}
            // onSubmitEditing={() => this.pw.onFocus()}
            // onChangeText={(newemail) =>
            //   this.setState({
            //     email: newemail,
            //   })
            // }

            // value={this.state.email}
            label="Full Name"
          />

          <MainInput
            placeholder="Enter Email Address"
            // style={styles.field}
            ref={r => (this.email = r)}
            // onSubmitEditing={() => this.pw.onFocus()}
            // onChangeText={(newemail) =>
            //   this.setState({
            //     email: newemail,
            //   })
            // }
            keyboardType="email-address"
            // value={this.state.email}
            label="Email Address"
          />
          <MainInput
            placeholder="Enter Phone Number"
            // style={styles.field}
            ref={r => (this.email = r)}
            // onSubmitEditing={() => this.pw.onFocus()}
            // onChangeText={(newemail) =>
            //   this.setState({
            //     email: newemail,
            //   })
            // }

            // value={this.state.email}
            label="Phone Number"
          />
          <MainInput
            placeholder="Enter Password"
            // style={styles.field}
            ref={r => (this.name = r)}
            // onSubmitEditing={() => this.pw.onFocus()}
            // onChangeText={(newemail) =>
            //   this.setState({
            //     email: newemail,
            //   })
            // }
            secureTextEntry
            // value={this.state.password}
            label="Password"
          />

          <MainInput
            placeholder="Confirm Password"
            // style={styles.field}
            ref={r => (this.name = r)}
            // onSubmitEditing={() => this.pw.onFocus()}
            // onChangeText={(newemail) =>
            //   this.setState({
            //     email: newemail,
            //   })
            // }
            secureTextEntry
            // value={this.state.password}
            label="Confirm Password"
          />

          <View>
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
          </View>

          <Button
            title="CONTINUE"
            onPress={() => this.props.navigation.navigate('Subscription')}
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
      </View>
    );
  }
}
export default RegisterScreen;
