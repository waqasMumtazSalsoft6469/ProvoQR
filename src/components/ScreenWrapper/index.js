import React from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './styles';

const ScreenWrapper = props => {
  return (
    <ImageBackground
      style={[styles.container, props.style]}
      source={props.image}>
      {props.children}
    </ImageBackground>
  );
};
export default ScreenWrapper;
