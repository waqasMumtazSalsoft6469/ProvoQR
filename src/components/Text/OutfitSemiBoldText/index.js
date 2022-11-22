import React from 'react';
import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import ThemeColors from '../../../Utils/ThemeColors';
import TextHOC from '../TextHOC';

const OutfitSemiBoldText = props => {
  return (
    <TextHOC {...props} ellipsizeMode="tail" style={[styles.text, props.style]}>
      {props.children}
    </TextHOC>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.Outfit.SemiBold,
    color: ThemeColors.iconColor,
  },
});
export default OutfitSemiBoldText;
