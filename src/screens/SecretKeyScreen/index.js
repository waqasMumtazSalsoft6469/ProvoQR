import React from 'react';
import {ImageBackground, View, Image, FlatList} from 'react-native';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import TouchableHOC from '../../components/Buttons/TouchableHOC';
import RubikRegular from '../../components/Text/RubikRegular';
import RubikLight from '../../components/Text/RubikLight';
import ThemeColors from '../../Utils/ThemeColors';
import Button from '../../components/Buttons/SimpleButton';
import styles from './styles';
import {vh, vw} from '../../Utils/Units';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import OutfitRegular from '../../components/Text/OutfitRegularText';
import OutfitRegularText from '../../components/Text/OutfitRegularText';

class SecretKey extends React.Component {
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
          imageStyle={styles.imgbg}>
          <View style={{alignItems: 'center', marginTop: 15 * vh}}>
            <OutfitSemiBoldText style={styles.secText}>
              Secret Key
            </OutfitSemiBoldText>
            <OutfitRegular style={styles.title}>
              Share the key to get incentives!
            </OutfitRegular>

            <View style={styles.key}>
              <View style={{width: 60 * vw, marginHorizontal: 6 * vw}}>
                <OutfitRegularText style={styles.keytext}>
                  47683483
                </OutfitRegularText>
              </View>

              <Image source={icons.doc} style={styles.docimg} />
            </View>

            <Button title="SHARE" btnContainer={{marginTop: 4 * vh}} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default SecretKey;
