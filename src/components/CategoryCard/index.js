import React from 'react';
import {View, Image} from 'react-native';
import {imageUrl} from '../../Api/configs';
import {checkIfImageExists} from '../../Api/HelperFunction';
import {sampleimage} from '../../assets/images';
import TouchableHOC from '../Buttons/TouchableHOC';
import OutfitMediumText from '../Text/OutfitMediumText';
import styles from './styles';

const CategoryCard = props => {
  return (
    <TouchableHOC
      style={[styles.container, props?.style]}
      onPress={props?.onPress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          defaultSource={sampleimage.placeholder}
          source={
            props?.item?.image
              ? {uri: imageUrl + props?.item?.image}
              : sampleimage?.placeholder
          }
        />
      </View>
      <OutfitMediumText style={styles.nameText}>
        {props?.item?.name}
      </OutfitMediumText>
    </TouchableHOC>
  );
};

export default CategoryCard;
