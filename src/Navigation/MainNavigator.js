import React from 'react';
import {View} from 'react-native';
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

const MainStack = createStackNavigator();

class MainNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   getCurrentLocation();
  //   this.props.getAllNotifications();
  //   this.props.getProfileData();
  //   this.props.getAllCategories();
  //   // AnimatedSplash.hide();
  // }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      getCurrentLocation();
      // this.props.getAllNotifications();
      // this.props.getProfileData();
      this.props.getAllCategories();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  renderSelection = () => {
    const {token, userData} = this.props;
    console.log('userData', userData);
    return (
      <MainStack.Navigator
        // initialRouteName='HomeTabs'
        headerMode="screen"
        screenOptions={getNavigationOptions}>
        {/* {!token && (
          <MainStack.Screen component={AuthNavigator} name="Authstack" />
        )} */}
        {token &&
          (!userData?.age || !userData?.address || !userData?.gender) && (
            <MainStack.Screen
              component={CompleteProfile}
              name="CompleteProfile"
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
        <MainStack.Screen
          component={ProvoPaymentMethod}
          name="ProvoPaymentMethod"
        />
        <MainStack.Screen component={ResturentDetail} name="ResturentDetail" />
        <MainStack.Screen
          component={RestaurantDirection}
          name="RestaurantDirection"
        />
        <MainStack.Screen
          component={ResturentMenuScreen}
          name="ResturentMenu"
        />
        <MainStack.Screen
          component={LootBoxPaymentMethod}
          name="LootBoxPaymentMethod"
        />
        <MainStack.Screen
          component={LootBoxScreen}
          name="LootBoxScreen"
          options={{headerShown: false}}
        />
        <MainStack.Screen
          component={HappyHourMenuScreen}
          name="HappyHourMenuScreen"
          options={{headerTransparent: true}}
        />
      </MainStack.Navigator>
    );
  };

  render() {
    return <View style={{flex: 1}}>{this.renderSelection()}</View>;
  }
}
const mapState = state => {
  return {
    token: state.SessionReducer.token,
    userData: state.SessionReducer.userData,
  };
};
const mapProps = dispatch => {
  return {
    getAllCategories: () => dispatch(getAllCategories()),
    getAllNotifications: () => dispatch(getAllNotifications()),
    getProfileData: () => dispatch(getProfileData()),
  };
};
export default connect(mapState, mapProps)(MainNavigator);
