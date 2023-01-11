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
import CompleteProfile from '../screens/CompleteProfile';
import {getAllCategories} from '../Redux/Actions/otherActions';

const MainStack = createStackNavigator();

class MainNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getAllCategories();
    AnimatedSplash.hide();
  }

  renderSelection = () => {
    const {token, userData} = this.props;
    return (
      <MainStack.Navigator
        // initialRouteName='HomeTabs'
        headerMode="screen"
        screenOptions={getNavigationOptions}>
        {!token && (
          <MainStack.Screen component={AuthNavigator} name="Authstack" />
        )}
        {token &&
          (!userData?.age || !userData?.address || !userData?.gender) && (
            <MainStack.Screen
              component={CompleteProfile}
              name="CompleteProfile"
            />
          )}
        <MainStack.Screen component={Drawer} name="Drawer" />
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
  return {
    token: state.SessionReducer.token,
    userData: state.SessionReducer.userData,
  };
};
const mapProps = dispatch => {
  return {
    getAllCategories: () => dispatch(getAllCategories()),
  };
};
export default connect(mapState, mapProps)(MainNavigator);
