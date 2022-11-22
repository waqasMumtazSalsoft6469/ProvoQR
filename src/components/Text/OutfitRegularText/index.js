import React from 'react';
import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import ThemeColors from '../../../Utils/ThemeColors';
import TextHOC from '../TextHOC';

const OutfitRegularText = props => {
  return (
    <TextHOC {...props} ellipsizeMode="tail" style={[styles.text, props.style]}>
      {props.children}
    </TextHOC>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.Outfit.regular,
    color: ThemeColors.iconColor,
  },
});
export default OutfitRegularText;
