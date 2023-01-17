import React from 'react';
import {View} from 'react-native';
import OutfitRegularText from '../Text/OutfitRegularText';
import styles from './styles';

const EmptyComponent = props => {
  return (
    <View style={[styles.emptyContainer, props?.style]}>
      <OutfitRegularText style={[styles.emptyText, props?.textStyle]}>
        {props?.text}
      </OutfitRegularText>
    </View>
  );
};

export default EmptyComponent;
