import React from 'react';
import {View, Image} from 'react-native';
import {imageUrl} from '../../Api/configs';
import {icons} from '../../assets/images';
import TouchableHOC from '../Buttons/TouchableHOC';
import OutfitSemiBoldText from '../Text/OutfitSemiBoldText';
import styles from './styles';

const HomeCategoryCard = props => {
  return (
    <TouchableHOC
      style={[styles.container, props?.style]}
      onPress={props?.onPress}>
      <View style={styles.innerContainer}>
        <Image
          source={{uri: imageUrl + props?.item?.image}}
          style={styles.iconStyle}
        />
        <OutfitSemiBoldText style={styles.nameTextStyle}>
          {'  '}
          {props?.item.name}
        </OutfitSemiBoldText>
      </View>
    </TouchableHOC>
  );
};

export default HomeCategoryCard;
