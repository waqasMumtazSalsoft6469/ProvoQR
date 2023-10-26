import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const images = [
  {
    id: 1,
    source:
      'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
  },
  {
    id: 2,
    source:
      'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
  },
  {
    id: 3,
    source:
      'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
  },
  {
    id: 4,
    source:
      'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
  },
  {
    id: 5,
    source:
      'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
  },
  {
    id: 6,
    source:
      'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
  },
  {
    id: 7,
    source:
      'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
  },
  {
    id: 8,
    source:
      'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
  },
  {
    id: 9,
    source:
      'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
  },
  // Add more images here...
];

const NewGrid2 = () => {
  const [displayedImages, setDisplayedImages] = useState([]);

  const initializeDisplayedImages = () => {
    setDisplayedImages([
      getTwoNextImages(),
      getThreeNextImages(),
      getThreeNextImages(),
      getTwoNextImages(),
    ]);
  };

  const getNextImage = index => {
    if (index < images.length) {
      return images[index];
    }
    return null; // Return null when there are no more images
  };

  const getTwoNextImages = () => {
    const image1 = getNextImage(displayedImages.flat().length);
    const image2 = getNextImage(displayedImages.flat().length + 1);
    return [image1, image2].filter(Boolean); // Filter out null values
  };

  const getThreeNextImages = () => {
    const image1 = getNextImage(displayedImages.flat().length);
    const image2 = getNextImage(displayedImages.flat().length + 1);
    const image3 = getNextImage(displayedImages.flat().length + 2);
    return [image1, image2, image3].filter(Boolean); // Filter out null values
  };

  useEffect(() => {
    initializeDisplayedImages();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {displayedImages.map((rowImages, index) => (
        <View style={styles.row} key={index}>
          {rowImages.map(image => (
            <View style={styles.smallImageContainer} key={image.id}>
              <Image source={{uri: image?.source}} style={styles.smallImage} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  leftSmallImage: {
    flex: 1,
  },
  rightLargeImage: {
    flex: 2,
  },
  leftLargeImage: {
    flex: 2,
  },
  rightSmallImage: {
    flex: 1,
  },
  smallImageContainer: {
    flex: 1,
  },
  smallImage: {
    width: '100%',
    height: 100,
  },
  largeImage: {
    width: '100%',
    height: 200,
  },
});

export default NewGrid2;
