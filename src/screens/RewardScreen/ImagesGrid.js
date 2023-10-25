import React from 'react';
import {View, Image, StyleSheet, FlatList} from 'react-native';

const ImageGrid = ({imageArray, image}) => {
  const renderImages = () => {
    const images = [];

    for (let i = 0; i < imageArray.length; i++) {
      const image = imageArray[i];

      if (i === 0) {
        // First image is large, alone on the right
        images.push(
          <View key={image.id} style={styles.largeImageContainer}>
            <Image source={image.source} style={styles.largeImage} />
          </View>,
        );
      } else if (i < 3) {
        // The next two images are small and on the left
        images.push(
          <View key={image.id} style={styles.smallImageContainer}>
            <Image source={image.source} style={styles.smallImage} />
          </View>,
        );
      } else {
        // The rest of the images are placed in the same row
        images.push(
          <View key={image.id} style={styles.smallImageContainer}>
            <Image source={image.source} style={styles.smallImage} />
          </View>,
        );
      }
    }

    return images;
  };

  return <View style={styles.container}>{renderImages()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  smallImageContainer: {
    flex: 1,
    width: '50%', // Adjust the width as needed
    aspectRatio: 1, // Maintain aspect ratio
  },
  largeImageContainer: {
    flex: 2,
    width: '50%', // Adjust the width as needed
    aspectRatio: 1, // Maintain aspect ratio
  },
  smallImage: {
    width: '100%', // Make the images take up the full width of their container
  },
  largeImage: {
    width: '100%', // Make the large image take up the full width of its container
  },
});

export default ImageGrid;
