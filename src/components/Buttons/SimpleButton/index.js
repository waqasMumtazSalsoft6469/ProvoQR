import React from 'react';
import {Text, View} from 'react-native';
import RubikMedium from '../../Text/RubikMedium';
import OutfitSemiBoldText from '../../Text/OutfitSemiBoldText';
import styles from './styles';
import TouchableHOC from '../TouchableHOC';

export default Button = props => {
  return (
    <TouchableHOC
      style={[styles.container, props.btnContainer]}
      onPress={props.onPress}>
      <OutfitSemiBoldText style={[styles.label, props.labelStyle]}>
        {props.title}
      </OutfitSemiBoldText>
    </TouchableHOC>
  );
};
