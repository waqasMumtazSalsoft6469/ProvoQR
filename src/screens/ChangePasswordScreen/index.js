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

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
              />
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

            <View style={{alignItems: 'center', marginBottom: 2 * vh}}>
              <Button
                title="UPDATE"
                btnContainer={{
                  marginTop: 2 * vh,
                  paddingHorizontal: 6 * vw,
                  width: 40 * vw,
                  height: 6 * vh,
                }}
              />
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default RegisterScreen;
