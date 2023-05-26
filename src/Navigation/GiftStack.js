import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RewardScreen from '../screens/RewardScreen';
import {getNavigationOptions} from './NavigationOptions';
import RewardDetail from '../screens/RewardDetailScreen';
import RedeemRewardScreen from '../screens/RedeemRewardScreen';

const GiftNavigator = createStackNavigator();

const MenuStack = () => {
  return (
    <GiftNavigator.Navigator screenOptions={getNavigationOptions}>
      <GiftNavigator.Screen component={RewardScreen} name="RewardScreen" />
      {/* <GiftNavigator.Screen component={RewardDetail} name="RewardDetail" /> */}
      <GiftNavigator.Screen
        component={RedeemRewardScreen}
        name="RedeemRewardScreen"
        options={{headerShown: false}}
      />
    </GiftNavigator.Navigator>
  );
};
export default MenuStack;
