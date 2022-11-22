import React from 'react';
import {ImageBackground, View, Image, ScrollView} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import RubikLight from '../../components/Text/RubikLight';
import MainInput from '../../components/Input/MainInput';
import {vh, vw} from '../../Utils/Units';
import OutfitLightText from '../../components/Text/OutfitLightText';
import {sampleimage} from '../../assets/images/index';

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
          imageStyle={{width: 100 * vw, height: 100 * vh}}>
          <ScrollView>
            <View
              style={{
                alignItems: 'center',
                marginTop: 5 * vh,
                paddingHorizontal: 4 * vw,
              }}>
              <Image source={sampleimage.home2} style={styles.image} />
              <OutfitLightText style={styles.about}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </OutfitLightText>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default RegisterScreen;
