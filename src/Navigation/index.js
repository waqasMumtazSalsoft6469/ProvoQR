import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ParentNavigator from './ParentNavigator';
const Navigation = () => {
  return (
    <NavigationContainer>
      <ParentNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
