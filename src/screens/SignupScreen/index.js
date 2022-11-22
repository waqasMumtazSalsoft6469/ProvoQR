import React from 'react';
import {ImageBackground, View, Image} from 'react-native';
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
import RubikLight from '../../components/Text/RubikLight';
import OutfitMediumText from '../../components/Text/OutfitMediumText';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confpw: '',
    };
  }

  render() {
    return (
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 5 * vh,
            paddingHorizontal: vw * 2,
          }}>
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
              <RubikLight style={styles.gender}>Enter Location</RubikLight>
              <Image source={icons.loc} style={styles.down} />
            </TouchableHOC>
          </View>

          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('Subscription')}
            btnContainer={{marginTop: 2 * vh}}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 4 * vh,
              marginBottom: 4 * vh,
              justifyContent: 'center',
            }}>
            <RubikRegular style={styles.account}>
              Don't have an account?
            </RubikRegular>
            <TouchableHOC onPress={() => this.props.navigation.goBack()}>
              <RubikRegular style={styles.createaccount}>
                Log In Here
              </RubikRegular>
            </TouchableHOC>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
export default SignupScreen;
