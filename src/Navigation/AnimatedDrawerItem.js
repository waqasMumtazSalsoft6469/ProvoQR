import React from 'react';

import {View, TouchableOpacity, Text, Image} from 'react-native';

import Animated from 'react-native-reanimated';

import styles from './styles';

const AnimatedDrawerItem = props => {
  const translateX = Animated.interpolate(props.progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <Animated.View style={{transform: [{translateX}]}}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={props.onPress}>
        <View style={styles.rowStyle}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={props.source}
          />

          <Text style={styles.optionLabel}>{props.label}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AnimatedDrawerItem;
