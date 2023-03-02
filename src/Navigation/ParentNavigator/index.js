import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import MainNavigator from '../MainNavigator';
import AuthNavigator from '../AuthNavigator';
import {getNavigationOptions} from '../NavigationOptions';
import AnimatedSplash from 'react-native-animated-splash';

const Stack = createStackNavigator();

const ParentNavigator = () => {
  useEffect(() => {
    AnimatedSplash.hide();
  }, []);

  return (
    <Stack.Navigator screenOptions={getNavigationOptions}>
      <Stack.Screen name="MainNavigator" component={MainNavigator} />
      <Stack.Screen
        name="Authstack"
        component={AuthNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default ParentNavigator;
