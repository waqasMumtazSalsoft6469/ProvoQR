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
import OutfitMediumText from '../../components/Text/OutfitMediumText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Amanda Charles',
      age: '20',
      phone: '123456789',
      gender: 'Female',
      country: 'United States',
      city: 'New York',
      State: 'ASDFG',
      zipCode: '12345',
    };
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
            <View style={{marginTop: 5 * vh, paddingHorizontal: 4 * vw}}>
              <View style={{alignItems: 'center'}}>
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
                  onChangeText={newemail =>
                    this.setState({
                      name: newemail,
                    })
                  }
                  value={this.state.name}
                  label="Name"
                />

                <MainInput
                  placeholder="Enter age"
                  // style={styles.field}
                  ref={r => (this.email = r)}
                  // onSubmitEditing={() => this.pw.onFocus()}
                  onChangeText={newemail =>
                    this.setState({
                      age: newemail,
                    })
                  }
                  value={this.state.age}
                  label="Age"
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
                  Amanda@email.com
                </OutfitRegularText>
              </View>
              <View
                style={{
                  marginTop: 3 * vh,
                  paddingHorizontal: 8 * vw,
                  marginBottom: vh,
                }}>
                <OutfitMediumText style={styles.emailtext}>
                  User ID{' '}
                </OutfitMediumText>
                <OutfitRegularText style={styles.email}>
                  03RS231{' '}
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
                <MainInput
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
                />
                <MainInput
                  placeholder="Enter Country"
                  // style={styles.field}
                  ref={r => (this.email = r)}
                  // onSubmitEditing={() => this.pw.onFocus()}
                  onChangeText={newemail =>
                    this.setState({
                      country: newemail,
                    })
                  }
                  value={this.state.country}
                  label="Country"
                />
                <MainInput
                  placeholder="Enter City"
                  // style={styles.field}
                  ref={r => (this.email = r)}
                  // onSubmitEditing={() => this.pw.onFocus()}
                  onChangeText={newemail =>
                    this.setState({
                      city: newemail,
                    })
                  }
                  value={this.state.city}
                  label="City"
                />
                <MainInput
                  placeholder="Enter State"
                  // style={styles.field}
                  ref={r => (this.email = r)}
                  // onSubmitEditing={() => this.pw.onFocus()}
                  onChangeText={newemail =>
                    this.setState({
                      State: newemail,
                    })
                  }
                  value={this.state.State}
                  label="State"
                />
                <MainInput
                  placeholder="Enter Zipcode"
                  // style={styles.field}
                  ref={r => (this.email = r)}
                  // onSubmitEditing={() => this.pw.onFocus()}
                  onChangeText={newemail =>
                    this.setState({
                      zipCode: newemail,
                    })
                  }
                  value={this.state.zipCode}
                  label="Zipcode"
                />
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
              />
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default RegisterScreen;
