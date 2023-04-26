import React from 'react';
import {Image, ImageBackground, ScrollView} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import {imageUrl} from '../../Api/configs';

const HappyHourMenuScreen = props => {
  const deal = props?.route?.params?.deal;
//   console.log('deal', deal);
  return (
    <ImageBackground
      source={backgrounds.happyHourMenuScreenBg}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Image source={icons.happyHourIcon} style={styles.topIconStyle} />
        <Image
          source={{uri: imageUrl + deal?.menu_card_image}}
          style={styles.menuCardStyle}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default HappyHourMenuScreen;
