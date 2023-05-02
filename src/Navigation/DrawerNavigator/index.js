import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Drawer from '../NavigationDrawer';

const Stack = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainNavigator" component={Drawer} />
    </Stack.Navigator>
  );
};
export default DrawerNavigator;
