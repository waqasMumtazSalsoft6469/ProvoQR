import React from 'react';
import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import TextHOC from '../TextHOC';

const OutfitLightText = props => {
  return (
    <TextHOC {...props} ellipsizeMode="tail" style={[styles.text, props.style]}>
      {props.children}
    </TextHOC>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.Outfit.light,
  },
});
export default OutfitLightText;
