import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/Units';

export const twoLeft = image => {
  return (
    <View style={styles.container}>
      <View style={styles.twoLeft}>
        <View style={{flex: 1}}>
          <Image
            source={image}
            style={{height: '45%', width: '95%', marginLeft: 10}}
            resizeMode="cover"
          />
          <View style={{margin: 5}} />
          <Image
            source={image}
            style={{height: '45%', width: '95%', marginLeft: 10}}
            resizeMode="cover"
          />
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <Image
            source={image}
            style={{height: '94%', width: '100%'}}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};
export const inLine = image => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={image}
        style={{height: '100%', width: '30%', margin: 5}}
        resizeMode="cover"
      />
      <Image
        source={image}
        style={{height: '100%', width: '30%', margin: 5}}
        resizeMode="cover"
      />

      <Image
        source={image}
        style={{height: '100%', width: '30%', margin: 5}}
        resizeMode="cover"
      />
    </View>
  );
};
export const twoRight = image => {
  return (
    <View style={styles.container}>
      <View style={styles.twoLeft}>
        <View style={{flex: 1, marginRight: 10}}>
          <Image
            source={image}
            style={{height: '94%', width: '100%'}}
            resizeMode="cover"
          />
        </View>
        <View style={{flex: 1}}>
          <Image
            source={image}
            style={{height: '45%', width: '95%', marginLeft: 10}}
            resizeMode="cover"
          />
          <View style={{margin: 5}} />
          <Image
            source={image}
            style={{height: '45%', width: '95%', marginLeft: 10}}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: vh * 40,
  },
  twoLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  twoRight: {},
  smalImage: {
    height: vh * 40,
    width: vw * 40,
  },
});
