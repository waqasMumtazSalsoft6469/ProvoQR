import React from 'react';
import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import ThemeColors from '../../../Utils/ThemeColors';
import TextHOC from '../TextHOC';

const OutfitMediumText = props => {
  return (
    <TextHOC {...props} ellipsizeMode="tail" style={[styles.text, props.style]}>
      {props.children}
    </TextHOC>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.Outfit.medium,
    color: ThemeColors.iconColor,
  },
});
export default OutfitMediumText;
