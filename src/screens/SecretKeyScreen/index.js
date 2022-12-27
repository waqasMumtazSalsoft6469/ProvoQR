import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Image, FlatList, Clipboard} from 'react-native';
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
import {useDispatch} from 'react-redux';
import {getReferalCode} from '../../Redux/Actions/otherActions';
import {showToast} from '../../Api/HelperFunction';

const SecretKey = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState(null);

  useEffect(() => {
    dispatch(getReferalCode()).then(res => setCode(res?.code));
  }, []);

  const copyText = children => {
    if (typeof children === 'string') {
      Clipboard.setString(children);
      // showToast('Key Copy to Clipboard')
      showToast('"' + children + '" copied to clipboard.');
    }
  };

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
                {code}
              </OutfitRegularText>
            </View>
            <TouchableHOC onPress={() => copyText(code)}>
              <Image source={icons.doc} style={styles.docimg} />
            </TouchableHOC>
          </View>

          {/* <Button title="SHARE" btnContainer={{marginTop: 4 * vh}} /> */}
        </View>
      </ImageBackground>
    </View>
  );
};
export default SecretKey;
