import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {getNavigationOptions} from './NavigationOptions';
import Notification from '../screens/NotificationScreen';
import Profile from '../screens/ProfileScreen';
import Drawer from './NavigationDrawer';
import HomeTabs from './HomeTabs';
import AnimatedSplash from 'react-native-animated-splash';
import ChangePassword from '../screens/ChangePasswordScreen';
import EditProfile from '../screens/EditProfileScreen';
import EditBillingDetails from '../screens/EditBillingDetail';
import Payment from '../screens/PaymentScreen';
import Location from '../screens/LocationScreen';

import AuthNavigator from './AuthNavigator';

const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();

class MainNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AnimatedSplash.hide();
  }

  renderSelection = () => {
    return (
      <MainStack.Navigator
        // initialRouteName='HomeTabs'
        headerMode="screen"
        screenOptions={getNavigationOptions}>
        <MainStack.Screen component={AuthNavigator} name="Authstack" />
        <MainStack.Screen component={Drawer} name="Home" />
        <MainStack.Screen
          component={Location}
          name="Location"
          screenOptions={{headerShown: false}}
        />
        <MainStack.Screen component={Payment} name="Payment" />

        <MainStack.Screen component={Profile} name="Profile" />
        <MainStack.Screen component={ChangePassword} name="ChangePassword" />
        <MainStack.Screen component={EditProfile} name="EditProfile" />
        <MainStack.Screen component={Notification} name="Notification" />
        <MainStack.Screen
          component={EditBillingDetails}
          name="EditBillingDetails"
        />
      </MainStack.Navigator>
    );
  };

  render() {
    return <View style={{flex: 1}}>{this.renderSelection()}</View>;
  }
}
const mapState = state => {
  return {};
};
const mapProps = dispatch => {
  return {};
};
export default connect(mapState, mapProps)(MainNavigator);
