import React, {useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {getNavigationOptions} from './NavigationOptions';
import Notification from '../screens/NotificationScreen';
import Profile from '../screens/ProfileScreen';
import Drawer from './NavigationDrawer';
import HomeTabs from './HomeTabs';
import ChangePassword from '../screens/ChangePasswordScreen';
import EditProfile from '../screens/EditProfileScreen';
import EditBillingDetails from '../screens/EditBillingDetail';
import Payment from '../screens/PaymentScreen';
import Location from '../screens/LocationScreen';
import {useSelector, useDispatch} from 'react-redux';

import AuthNavigator from './AuthNavigator';
import CompleteProfile from '../screens/CompleteProfile';
import {getCurrentLocation} from '../Utils/mapHelperFunction';
import ProvoPaymentMethod from '../screens/ProvoPaymentMethod';
import ResturentDetail from '../screens/restaurantDetailsScreen';
import RestaurantDirection from '../screens/RestaurantDirectionScreen';
import ResturentMenuScreen from '../screens/ResturentMenuScreen';
import LootBoxScreen from '../screens/LootBoxScreen';
import LootBoxPaymentMethod from '../screens/LootBoxPaymentSelection';
import {
  getAllCategories,
  getProfileData,
  getAllNotifications,
} from '../Redux/Actions/otherActions';
import HappyHourMenuScreen from '../screens/HappyHourMenuScreen';
import LootboxTierScreen from '../screens/LootboxTierScreen';
import RewardDetail from '../screens/RewardDetailScreen';
import RedeemRewardScreen from '../screens/RedeemRewardScreen';
import LocationSearchScreen from '../screens/LocationSearchScreen';
import SearchLocationScreen from '../screens/SearchLocationScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  const dispatch = useDispatch();

  const {token, userData} = useSelector(state => state.SessionReducer);

  useFocusEffect(
    React.useCallback(() => {
      getCurrentLocation();
      dispatch(getAllCategories());
    }, []),
  );

  return (
    <MainStack.Navigator
      // initialRouteName="HomeTabs"
      // headerMode="screen"
      screenOptions={getNavigationOptions}
      // screenOptions={() => getNavigationOptions()}
    >
      {/* {!token && (
          <MainStack.Screen component={AuthNavigator} name="Authstack" />
        )} */}

      {token && (!userData?.age || !userData?.address || !userData?.gender) && (
        <MainStack.Screen
          component={CompleteProfile}
          name="CompleteProfile"
          options={{headerShown: false}}
        />
      )}

      <MainStack.Screen
        component={Drawer}
        name="Drawer"
        options={{headerShown: false}}
      />
      <MainStack.Screen component={Location} name="Location" />
      <MainStack.Screen component={Payment} name="Payment" />
      <MainStack.Screen component={Profile} name="Profile" />
      <MainStack.Screen component={ChangePassword} name="ChangePassword" />
      <MainStack.Screen component={EditProfile} name="EditProfile" />
      <MainStack.Screen component={Notification} name="Notification" />
      <MainStack.Screen
        component={EditBillingDetails}
        name="EditBillingDetails"
      />
      {/* <MainStack.Screen
        component={ProvoPaymentMethod}
        name="ProvoPaymentMethod"
      /> */}
      {/* <MainStack.Screen component={ResturentDetail} name="ResturentDetail" /> */}
      {/* <MainStack.Screen
        component={RestaurantDirection}
        name="RestaurantDirection"
      /> */}
      {/* <MainStack.Screen component={ResturentMenuScreen} name="ResturentMenu" /> */}
      {/* <MainStack.Screen
        component={LootBoxPaymentMethod}
        name="LootBoxPaymentMethod"
      /> */}
      {/* <MainStack.Screen
        component={LootBoxScreen}
        name="LootBoxScreen"
        options={{headerShown: false}}
      /> */}
      <MainStack.Screen
        component={HappyHourMenuScreen}
        name="HappyHourMenuScreen"
        options={{headerTransparent: true}}
      />
      {/* <MainStack.Screen
        component={LootboxTierScreen}
        name="LootboxTierScreen"
      /> */}
      {/* <MainStack.Screen
        component={LocationSearchScreen}
        name="LocationSearchScreen"
      /> */}
      <MainStack.Screen
        component={SearchLocationScreen}
        name="SearchLocationScreen"
      />
      {/* <MainStack.Screen component={RewardDetail} name="RewardDetail" /> */}
    </MainStack.Navigator>
  );
};

export default MainNavigator;
