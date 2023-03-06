import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import MainNavigator from '../MainNavigator';
import AuthNavigator from '../AuthNavigator';
import AnimatedSplash from 'react-native-animated-splash';

const Stack = createStackNavigator();

const ParentNavigator = () => {
  useEffect(() => {
    AnimatedSplash.hide();
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainNavigator" component={MainNavigator} />
      <Stack.Screen name="Authstack" component={AuthNavigator} />
    </Stack.Navigator>
  );
};
export default ParentNavigator;
