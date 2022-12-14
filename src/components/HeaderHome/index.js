import React from 'react';
import {Text, View, Image, ImageBackground, StatusBar} from 'react-native';
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
        // height: 18 * vh,
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight * 5,
      }}>
      {props.children}
    </View>
  );
};
export default headerBackground;
