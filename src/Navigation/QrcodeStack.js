import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import QRcodeScreen from '../screens/QrCodeScreen';
import QRcodeSuccess from '../screens/ShowQrSuccess';
import {getNavigationOptions} from './NavigationOptions';
import RewardScreen from '../screens/RewardScreen';

const QrNavigator = createStackNavigator();

const MenuStack = () => {
  return (
    <QrNavigator.Navigator screenOptions={getNavigationOptions}>
      <QrNavigator.Screen component={QRcodeScreen} name="QRcodeScreen" />
      <QrNavigator.Screen
        component={QRcodeSuccess}
        name="QRcodeSuccess"
        options={{headerShown: false}}
      />
      <QrNavigator.Screen component={RewardScreen} name="RewardScreen" />
    </QrNavigator.Navigator>
  );
};
export default MenuStack;
