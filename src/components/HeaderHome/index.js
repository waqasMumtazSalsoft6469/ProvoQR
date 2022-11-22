import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
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
        height: 22 * vh,
        justifyContent: 'center',
      }}
      resizeMode="cover"
      imageStyle={{
        width: 100 * vw,
        height: 22 * vh,
        alignItems: 'center',
      }}>
      {props.children}
    </View>
  );
};
export default headerBackground;
