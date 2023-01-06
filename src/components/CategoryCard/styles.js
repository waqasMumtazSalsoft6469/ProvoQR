import {StyleSheet, Text, View} from 'react-native';
import ThemeColors from '../../Utils/ThemeColors';
import { themeShadow, vh, vw } from '../../Utils/Units';

const styles = StyleSheet.create({
  container: {
    height: vw*43.2 * 0.9,
    width: vw*43.2,
    backgroundColor: ThemeColors.white,
    ...themeShadow,
    borderRadius: vw*3,
    alignItems: 'center',
    padding: vw*2.5
  },
  imageContainer:{
    height: vw*37.8*0.7,
    width: vw*37.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw*3,
  },
  imageStyle:{
    height: vw*37.8*0.7,
    width: vw*37.8,
    borderRadius: vw*3,
    resizeMode: 'cover'
  },
  nameText:{
    marginTop: vh*1,
    color: ThemeColors.black,
    fontSize: vh*1.9
  }
});

export default styles;
