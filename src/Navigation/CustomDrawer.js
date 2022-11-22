import React from 'react';

import {DrawerContentScrollView} from '@react-navigation/drawer';

import {Image, Text} from 'react-native';
import styles from './styles';
import {vh, vw} from '../Utils/Units';
import AnimatedDrawerItem from './AnimatedDrawerItem';
import Animated from 'react-native-reanimated';
import {drawericons, generalImages, tabIcons} from '../assets/images';

const icons = {
  drawer1: drawericons.drawer1,
  drawer2: drawericons.drawer1,
  drawer3: drawericons.drawer1,
  drawer4: drawericons.drawer1,
  drawer5: drawericons.drawer1,
  drawer6: drawericons.drawer1,
  drawer7: drawericons.drawer1,
  drawer8: drawericons.drawer1,
  drawer9: drawericons.drawer1,
};

const CustomDrawer = props => {
  const translateX = Animated.interpolate(props.progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const Opacity = Animated.interpolate(props.progress, {
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <>
      <DrawerContentScrollView
        {...props}
        style={{
          // width: 72 * vw,
          marginTop: 10 * vh,
        }}>
        <Animated.View style={{transform: [{translateX}]}}>
          <AnimatedDrawerItem
            source={icons.drawer1}
            label="Home"
            onPress={() => {
              props.navigation.navigate('HomeScreen');
            }}
            {...props}
          />

          <AnimatedDrawerItem
            source={icons.drawer1}
            label="Restaurant Request"
            onPress={() => {
              props.navigation.navigate('Orders');
            }}
            {...props}
          />

          <AnimatedDrawerItem
            source={icons.drawer1}
            label="Secret Key"
            onPress={() => {
              props.navigation.navigate('Vendors');
            }}
            {...props}
          />

          <AnimatedDrawerItem
            source={icons.drawer1}
            label="History"
            onPress={() => {
              props.navigation.navigate('About');
            }}
            {...props}
          />

          <AnimatedDrawerItem
            source={icons.drawer1}
            label="About Us"
            onPress={() => {
              props.navigation.navigate('ContactusScreen');
            }}
            {...props}
          />

          <AnimatedDrawerItem
            source={icons.drawer1}
            label="Contact Us"
            onPress={() => {
              props.navigation.navigate('ContactusScreen');
            }}
            {...props}
          />
          <AnimatedDrawerItem
            source={icons.drawer1}
            label="Request Log"
            onPress={() => {
              props.navigation.navigate('ContactusScreen');
            }}
            {...props}
          />

          <AnimatedDrawerItem
            source={icons.drawer1}
            label="MySubscription"
            onPress={() => {
              props.navigation.navigate('ContactusScreen');
            }}
            {...props}
          />

          <AnimatedDrawerItem
            source={icons.drawer1}
            label="Logout"
            onPress={() => {
              props.navigation.navigate('ContactusScreen');
            }}
            {...props}
          />
        </Animated.View>
      </DrawerContentScrollView>
    </>
  );
};

export default CustomDrawer;
