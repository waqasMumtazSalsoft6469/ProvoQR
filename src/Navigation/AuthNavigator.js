import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import PasswordRecovery from '../screens/PasswordRecovery';
import Subscription from '../screens/Subscription';
import SuccessScreen from '../screens/SuccessScreen';
import Payment from '../screens/PaymentScreen';
import CompleteProfile from '../screens/CompleteProfile';
import Location from '../screens/LocationScreen';
import DrawerNavigation from './NavigationDrawer';
import HomeTabs from './HomeTabs';
import {getNavigationOptions} from './NavigationOptions';

const AuthStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen component={Login} name="Login" />
      {/* <AuthStack.Screen component={CompleteProfile} name="CompleteProfile" /> */}
      {/* <AuthStack.Screen
        component={Location}
        name="Location"
        screenOptions={{headerShown: false}}
      /> */}
      <AuthStack.Screen component={Signup} name="Signup" />
      <AuthStack.Screen component={PasswordRecovery} name="PasswordRecovery" />
      <AuthStack.Screen component={Subscription} name="Subscription" />
      {/* <AuthStack.Screen component={Payment} name="Payment" /> */}
      <AuthStack.Screen component={SuccessScreen} name="SuccessScreen" />
      {/* <AuthStack.Screen component={DrawerNavigation} name="DrawerStack" /> */}
    </AuthStack.Navigator>
  );
};
export default HomeNavigator;
