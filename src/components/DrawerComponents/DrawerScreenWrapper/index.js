import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {Platform, StyleSheet, ImageBackground} from 'react-native';
import Animated from 'react-native-reanimated';
import {vh, vw} from '../../../Utils/Units';
import styles from './styles';
import {backgrounds} from '../../../assets/images';

const DrawerScreenWrapper = props => {
  const progress = useDrawerProgress();
  // const scale = Animated.interpolateNode(progress, {
  //   inputRange: [0, 3],
  //   outputRange: [1, 0.4],
  // });

  // const translateX = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, Platform.OS == 'ios' ? 4 * vw : -60 * vw],
  // });

  // const borderRadius = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 1 * vw],
  // });

  // const animatedStyle = {borderRadius, transform: [{scale}]};
  // const animatedOuterStyle = {transform: [{scale}]};

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 3],
    outputRange: [1, 0.4],
  });
  const scaleInner = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 1],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 40],
  });

  const translateY = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 2],
  });
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, Platform.OS == 'ios' ? 4 * vw : -70 * vw],
  });
  const animatedStyle = {
    transform: [{scale}, {translateY}],
    borderRadius,
  };

  return (
    <Animated.View style={[animatedStyle]}>
      <Animated.View
        style={[
          {
            // overflow: 'hidden',
            // height: vh * 100,
            width: '100%',
            shadowColor: '#000',
            borderRadius,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          },
          {transform: [{scale: scaleInner, translateX}]},
        ]}>
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            borderRadius,
            overflow: 'hidden',
          }}>
          {props.children}
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};
export default DrawerScreenWrapper;
