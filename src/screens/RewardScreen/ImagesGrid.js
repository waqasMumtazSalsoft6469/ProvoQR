import React from 'react';
import {View, Image, StyleSheet, FlatList} from 'react-native';
import {twoLeft, inLine, twoRight} from './rewards';

import MasonryList from 'react-native-masonry-list';

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
    // Add more images here...
  ];

  const components = [twoLeft, inLine, twoRight];

  // Initialize variables
  let currentComponentIndex = 0;

  // Function to render 3 images with the current component
  function renderImagesWithComponent(images, component) {
    for (let i = 0; i < 3; i++) {
      const image = images.shift(); // Get and remove the first image from the array
      if (image) {
        component.render(image);
      }
    }
  }

  // Loop over the 20 images and call the custom rendering function
  while (images.length > 0) {
    const currentComponent = components[currentComponentIndex];
    renderImagesWithComponent(images, currentComponent);

    // Increment the currentComponentIndex, and make sure it wraps around
    currentComponentIndex = (currentComponentIndex + 1) % components.length;
  }

  console.log('Total Length Of Images Arry >>', imageArray.length);
  const groupedArray = [];
  for (let i = 0; i < imageArray.length; i += 3) {
    const group = imageArray.slice(i, i + 3);
    groupedArray.push({data: group});
  }

  console.log('groupedArray ***>>>', JSON.stringify(groupedArray));

  const Latestimages = [
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
    // Add more images here...
  ];

  return (
    <>
      <View>{twoLeft(image)}</View>
      <View style={{height: '16%'}}>{inLine(image)}</View>
      <View>{twoRight(image)}</View>
    </>
    // <MasonryList
    //   images={[
    //     // Can be used with different image object fieldnames.
    //     // Ex. source, source.uri, uri, URI, url, URL
    //     {
    //       uri: 'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
    //     },
    //     // IMPORTANT: It is REQUIRED for LOCAL IMAGES
    //     // to include a dimensions field with the
    //     // actual width and height of the image or
    //     // it will throw an error.
    //     // { source: require("yourApp/image.png"),
    //     //     dimensions: { width: 1080, height: 1920 }
    //     // },
    //     // "width" & "height" is an alternative to the dimensions
    //     // field that will also be acceptable.
    //     // { source: require("yourApp/image.png"),
    //     //     width: 1080,
    //     //     height: 1920 },
    //     {
    //       source: {
    //         uri: 'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
    //       },
    //     },
    //     {
    //       uri: 'https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg',
    //       // Optional: Adding a dimensions field with
    //       // the actual width and height for REMOTE IMAGES
    //       // will help improve performance.
    //       dimensions: {width: 1080, height: 1920},
    //     },
    //     {
    //       URI: 'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
    //       // Optional: Does not require an id for each
    //       // image object, but is for best practices.
    //       id: 'blpccx4cn',
    //     },
    //     {
    //       url: 'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
    //     },
    //     {
    //       URL: 'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
    //     },
    //   ]}
    //   // Version *2.14.0 update
    //   // onEndReached={() => {
    //   //     // add more images when scrolls reaches end
    //   // }}
    // />
  );
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
