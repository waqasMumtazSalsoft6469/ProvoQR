import React, {useRef, useState} from 'react';
import {View, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Pagination} from 'react-native-snap-carousel';
import {imageUrl} from '../../Api/configs';
import {backgrounds, icons, sampleimage} from '../../assets/images';
import ThemeColors from '../../Utils/ThemeColors';
import {vw} from '../../Utils/Units';
import styles from './styles';

const entries = [
  {
    title: 'Titles',
    image: sampleimage.happyHour,
  },
  {
    title: 'Titles',
    image: sampleimage.happyHour,
  },
  {
    title: 'Titles',
    image: sampleimage.happyHour,
  },
];
const HomeCarouselConmponent = ({banners}) => {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const carouselRef = useRef();
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image source={{uri: imageUrl + item.image}} style={styles.image} />
      </View>
    );
  };
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={carouselRef}
        data={banners}
        autoplay
        renderItem={_renderItem}
        loop={true}
        autoplayDelay={5000}
        autoplayInterval={5000}
        sliderWidth={vw * 90}
        itemWidth={vw * 90}
        onSnapToItem={index => setActiveCarouselIndex(index)}
        enableSnap
        lockScrollWhileSnapping={true}
      />
      <Pagination
        dotsLength={banners.length}
        activeDotIndex={activeCarouselIndex}
        activeOpacity={1}
        containerStyle={styles.paginationContainer}
        dotColor={ThemeColors.primary}
        dotStyle={styles.paginationDot}
        inactiveDotColor={ThemeColors.primary}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={carouselRef}
        tappableDots
      />
    </View>
  );
};

export default HomeCarouselConmponent;
