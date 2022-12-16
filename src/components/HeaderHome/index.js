import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  StatusBar,
  Platform,
} from 'react-native';
import {vh, vw} from '../../Utils/Units';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import ThemeColors from '../../Utils/ThemeColors';
import TouchableHOC from '../Buttons/TouchableHOC';
const headerBackground = props => {
  return (
    <View
      style={{
        width: 100 * vw,
        // height: 8 * vh,
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,
        paddingBottom: vh * 2,
      }}>
      {props.children}
    </View>
  );
};
export default headerBackground;
