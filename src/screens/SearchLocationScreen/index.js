import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SearchLocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is Search Location Component</Text>
    </View>
  );
};

export default SearchLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
