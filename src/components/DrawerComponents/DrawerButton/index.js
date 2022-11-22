import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {vh, vw} from '../../../Utils/Units';

import styles from './styles';
import OutfitRegularText from '../../Text/OutfitRegularText';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = props => {
  const progress = useDrawerProgress();
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [40 * vw * (props.index + 1), 0],
  });
  const animatedStyles = {
    transform: [{translateX}],
  };

  return (
    <AnimatedTouchable
      onPress={() => props.onPress(props.routeName)}
      style={[styles.container, animatedStyles]}>
      <Image style={styles.icon} source={props.icon} />
      <OutfitRegularText style={styles.label}>{props.label}</OutfitRegularText>
    </AnimatedTouchable>
  );
};

export default DrawerButton;
