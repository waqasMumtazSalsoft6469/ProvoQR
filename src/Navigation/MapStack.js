import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ShowonMapScreen from '../screens/ShowOnMapScreen';
import RestaurantDetails from '../screens/restaurantDetailsScreen';
import ResturentCampaignDetails from '../screens/ResturentCampaignDetails';
import CampaignDetail from '../screens/CampaignDetails';

import MapScreen from '../screens/MapScreen';
import {getNavigationOptions} from './NavigationOptions';
import RestaurantDirection from '../screens/RestaurantDirectionScreen';

const MapNavigator = createStackNavigator();

const MenuStack = () => {
  return (
    <MapNavigator.Navigator screenOptions={getNavigationOptions}>
      <MapNavigator.Screen
        component={MapScreen}
        name="MapScreen"
        options={{headerTransparent: true}}
      />
      {/* <MapNavigator.Screen component={ShowonMapScreen} name="ShowonMapScreen" /> */}
      {/* <MapNavigator.Screen
        component={RestaurantDetails}
        name="RestaurantDetails"
      /> */}
      {/* <MapNavigator.Screen
        component={ResturentCampaignDetails}
        name="ResturentCampaignDetails"
      /> */}
      {/* <MapNavigator.Screen
        component={RestaurantDirection}
        name="RestaurantDirection"
      /> */}
      {/* <MapNavigator.Screen component={CampaignDetail} name="CampaignDetail" /> */}
    </MapNavigator.Navigator>
  );
};
export default MenuStack;
