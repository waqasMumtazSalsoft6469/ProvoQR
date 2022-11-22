import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RewardScreen from '../screens/RewardScreen';
import {getNavigationOptions} from './NavigationOptions';
import RewardDetail from '../screens/RewardDetailScreen';
import ProvoScreen from '../screens/ProvoScreen';

const ProvoNavigator = createStackNavigator();

const ProvoStack = () => {
  return (
    <ProvoNavigator.Navigator
      screenOptions={getNavigationOptions}
      headerMode="screen">
      <ProvoNavigator.Screen component={ProvoScreen} name="ProvoScreen" />
      {/* <ProvoNavigator.Screen component={RewardDetail} name="RewardDetail" /> */}
    </ProvoNavigator.Navigator>
  );
};
export default ProvoStack;
