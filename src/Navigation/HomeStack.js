import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ResturentDetail from '../screens/restaurantDetailsScreen';
import ResturentMenuScreen from '../screens/ResturentMenuScreen';
import RewardScreen from '../screens/RewardScreen';
import LootBoxScreen from '../screens/LootBoxScreen';
import RewardDetail from '../screens/RewardDetailScreen';
import LootBoxPaymentMethod from '../screens/LootBoxPaymentSelection';
import ProvoPaymentMethod from '../screens/ProvoPaymentMethod';
import {getNavigationOptions} from './NavigationOptions';
import RestaurantDirection from '../screens/RestaurantDirectionScreen';
import RestaurantListScreen from '../screens/RestaurantListScreen';
import CategoryListScreen from '../screens/CategoryListScreen';

const HomeNavigator = createStackNavigator();

const MenuStack = () => {
  return (
    <HomeNavigator.Navigator screenOptions={getNavigationOptions}>
      <HomeNavigator.Screen
        component={HomeScreen}
        name="HomeScreen"
        // options={{headerShown: false}}
      />
      <HomeNavigator.Screen
        component={ResturentDetail}
        name="ResturentDetail"
        options={{headerShown: true}}
      />
      <HomeNavigator.Screen
        component={RestaurantListScreen}
        name="RestaurantListScreen"
        options={{headerShown: true}}
      />
      <HomeNavigator.Screen
        component={CategoryListScreen}
        name="CategoryListScreen"
        options={{headerShown: true}}
      />
      <HomeNavigator.Screen
        component={ResturentMenuScreen}
        name="ResturentMenu"
        options={{headerShown: true}}
      />
      <HomeNavigator.Screen
        component={RestaurantDirection}
        name="RestaurantDirection"
      />
      <HomeNavigator.Screen
        component={LootBoxScreen}
        name="LootBoxScreen"
        options={{headerShown: false}}
      />
      <HomeNavigator.Screen component={RewardScreen} name="RewardScreen" />
      <HomeNavigator.Screen component={RewardDetail} name="RewardDetail" />
      <HomeNavigator.Screen
        component={LootBoxPaymentMethod}
        name="LootBoxPaymentMethod"
      />
      <HomeNavigator.Screen
        component={ProvoPaymentMethod}
        name="ProvoPaymentMethod"
      />
    </HomeNavigator.Navigator>
  );
};
export default MenuStack;
