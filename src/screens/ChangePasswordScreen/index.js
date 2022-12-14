import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
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
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import {connect} from 'react-redux';
import {changePassword} from '../../Redux/Actions/authActions';
import {showToast} from '../../Api/HelperFunction';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      old_password: '',
      password: '',
      password_confirmation: '',
    };
  }

  handlePassword = () => {
    const {old_password, password, password_confirmation} = this.state;
    if ((!old_password, !password, !password_confirmation)) {
      showToast('All Fields are required.');
    } else if (password != password_confirmation) {
      showToast('New Password and Confirm Password Should be same');
    } else {
      let data = {old_password, password, password_confirmation};
      this.props.changePassword(data).then(res => {
        showToast(res?.success);
        this.props.navigation.goBack();
      });
    }
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
            <View
              style={{
                marginTop: 5 * vh,
                paddingHorizontal: 4 * vw,
                alignItems: 'center',
              }}>
              <OutfitSemiBoldText style={styles.heading}>
                Edit Password
              </OutfitSemiBoldText>

              <MainInput
                placeholder="Enter Current Password"
                secureTextEntry={true}
                label="Current Password"
                onChangeText={text => this.setState({old_password: text})}
                defaultValue={this.state.old_password}
              />
              <MainInput
                placeholder="Enter New Password"
                secureTextEntry={true}
                label="New Password"
                onChangeText={text => this.setState({password: text})}
                defaultValue={this.state.password}
              />
              <MainInput
                placeholder="Confirm Password"
                secureTextEntry={true}
                label="Confirm Password"
                onChangeText={text =>
                  this.setState({password_confirmation: text})
                }
                defaultValue={this.state.password_confirmation}
              />
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
                onPress={this.handlePassword}
              />
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
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
    changePassword: data => dispatch(changePassword(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
