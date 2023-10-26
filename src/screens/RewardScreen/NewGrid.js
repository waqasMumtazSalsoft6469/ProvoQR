import React, {useState} from 'react';
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

const arr = [
  {
    data: [
      {
        id: 1,
        source: 'image.jpg',
        id: 2,
        source: 'image.jpg',
        id: 3,
        source: 'image.jpg',
      },
    ],
    data: [{id: 1, source: 'image.jpg'}],
    data: [{id: 1, source: 'image.jpg'}],
    data: [{id: 1, source: 'image.jpg'}],
  },
];
const data = [
  {img: 1},
  {img: 1},
  {img: 1},
  {img: 1},
  {img: 1},
  {img: 1},
  {img: 1},
];
const list = [];

const ComponentOne = ({group}) => (
  <View style={styles.containerOne}>
    {group.map(image => (
      <Image key={image.id} source={{uri: image.source}} style={styles.image} />
    ))}
  </View>
);

const ComponentTwo = ({group}) => (
  <View style={styles.containerTwo}>
    {group.map(image => (
      <Image key={image.id} source={{uri: image.source}} style={styles.image} />
    ))}
  </View>
);

const ComponentThree = ({group}) => (
  <View style={styles.containerThree}>
    {group.map(image => (
      <Image key={image.id} source={{uri: image.source}} style={styles.image} />
    ))}
  </View>
);

const NewGrid = () => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const groupSize = 3;

  const renderComponent = index => {
    const start = index * groupSize;
    const end = start + groupSize;
    return images.slice(start, end);
  };

  const nextComponent = () => {
    setCurrentGroupIndex(
      (currentGroupIndex + 1) % Math.ceil(images.length / groupSize),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ComponentOne group={renderComponent(currentGroupIndex)} />
      <ComponentTwo group={renderComponent(currentGroupIndex + 1)} />
      <ComponentThree group={renderComponent(currentGroupIndex + 2)} />
      <Text onPress={nextComponent} style={styles.nextButton}>
        Next
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  containerOne: {
    flexDirection: 'row',
  },
  containerTwo: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
  },
  containerThree: {
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
  nextButton: {
    fontSize: 20,
    margin: 10,
  },
});

export default NewGrid;
