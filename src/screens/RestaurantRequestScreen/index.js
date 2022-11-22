import React from 'react';
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

class RestaurantRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
                // style={styles.field}
                ref={r => (this.email = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                // onChangeText={(newemail) =>
                //   this.setState({
                //     email: newemail,
                //   })
                // }

                // value={this.state.email}
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
                    onPress={() => this.props.navigation.navigate('Location')}>
                    <OutfitRegularText style={styles.gender}>
                      Enter Location
                    </OutfitRegularText>
                    <Image source={icons.loc} style={styles.down} />
                  </TouchableHOC>
                </View>
              </View>

              <MainInput
                placeholder="Description"
                // style={styles.field}
                ref={r => (this.email = r)}
                // onSubmitEditing={() => this.pw.onFocus()}
                // onChangeText={(newemail) =>
                //   this.setState({
                //     email: newemail,
                //   })
                // }

                // value={this.state.email}
                label="Enter Description"
                multiline
                style={{height: vh * 15}}
              />

              <Button title="Submit" btnContainer={{marginTop: 2 * vh}} />
            </View>
          </ImageBackground>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
export default RestaurantRequest;
