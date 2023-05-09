import React, {useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import {imageUrl} from '../../Api/configs';
import ImageView from 'react-native-image-viewing';
import OutfitRegularText from '../../components/Text/OutfitRegularText';

const HappyHourMenuScreen = props => {
  const deal = props?.route?.params?.deal;
  //   console.log('deal', deal);

  const [activeIndex, setActiveIndex] = useState(0);
  const [openModal, setModal] = useState(false);

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleModalVisibility = index => {
    setActiveIndex(index);
    setModal(true);
  };

  const CarouselFooterComponent = ({imageIndex}) => {
    return (
      <View style={styles.footerContainer}>
        <OutfitRegularText style={styles.footerText}>
          {imageIndex + 1} / {deal?.happyhourmenus?.length}
        </OutfitRegularText>
      </View>
    );
  };
  console.log("deal menu images", deal);
  return (
    <ImageBackground
      source={backgrounds.happyHourMenuScreenBg}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Image source={icons.happyHourIcon} style={styles.topIconStyle} />
        {deal?.happyhourmenus?.map((item, index) => {
          console.log("deal?.happyhourmenus item", item);
          return (
            <TouchableOpacity
              key={item?.id}
              activeOpacity={0.9}
              onPress={() => handleModalVisibility(index)}>
              <Image
                source={{uri: imageUrl + item?.image}}
                style={styles.menuCardStyle}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <ImageView
        images={deal?.happyhourmenus.map(item => ({
          uri: imageUrl + item?.image,
        }))}
        imageIndex={activeIndex}
        visible={openModal}
        onRequestClose={handleCloseModal}
        FooterComponent={CarouselFooterComponent}
        presentationStyle="overFullScreen"
      />
    </ImageBackground>
  );
};

export default HappyHourMenuScreen;
