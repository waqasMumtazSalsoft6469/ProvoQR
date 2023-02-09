import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Alert,
  ImageBackground,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getNavigationOptions} from './NavigationOptions';
import {drawericons, backgrounds} from '../assets/images';

import styles from './styles';
import RequestLogs from '../screens/RequestLogsScreen';
import ContactUs from '../screens/ContactUs';
import AboutUs from '../screens/AboutUs';
import HistoryDetails from '../screens/HistoryDetails';
import History from '../screens/History';
import SecretKey from '../screens/SecretKeyScreen';
import MySubscriptions from '../screens/MySubscriptionScreen';
import Animated from 'react-native-reanimated';
import SubscriptionLogs from '../screens/SubscriptionLogs';
import {Component} from 'react';
import RestaurantRequest from '../screens/RestaurantRequestScreen';
import HomeTabs from './HomeTabs';
import DrawerScreenWrapper from '../components/DrawerComponents/DrawerScreenWrapper';
import DrawerContent from '../components/DrawerComponents/DrawerContent';
import {vh, vw} from '../Utils/Units';
import ThemeColors from '../Utils/ThemeColors';
import ProvoScreen from '../screens/ProvoScreen';

const App = createStackNavigator();
const Drawer = createDrawerNavigator();
const Contact = createStackNavigator();
const about = createStackNavigator();
const ResRequest = createStackNavigator();
const ReqLogs = createStackNavigator();
const secretkey = createStackNavigator();
const history = createStackNavigator();
const subscriptions = createStackNavigator();
const provo = createStackNavigator();

const AppStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <App.Navigator screenOptions={getNavigationOptions} headerMode="screen">
        <App.Screen component={HomeTabs} name="HomeTabs" />
      </App.Navigator>
    </DrawerScreenWrapper>
  );
};
const AboutStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <about.Navigator screenOptions={getNavigationOptions} headerMode="screen">
        <about.Screen component={AboutUs} name="AboutUs" />
      </about.Navigator>
    </DrawerScreenWrapper>
  );
};

const ContactStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <Contact.Navigator
        screenOptions={getNavigationOptions}
        headerMode="screen">
        <Contact.Screen component={ContactUs} name="ContactUs" />
      </Contact.Navigator>
    </DrawerScreenWrapper>
  );
};
const ReqLogsStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <ReqLogs.Navigator
        screenOptions={getNavigationOptions}
        headerMode="screen">
        <ReqLogs.Screen component={RequestLogs} name="RequestLogs" />
      </ReqLogs.Navigator>
    </DrawerScreenWrapper>
  );
};
const SubscriptionStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <subscriptions.Navigator
        screenOptions={getNavigationOptions}
        headerMode="screen">
        <subscriptions.Screen
          component={MySubscriptions}
          name="MySubscriptions"
        />
        <subscriptions.Screen
          component={SubscriptionLogs}
          name="SubscriptionLogs"
        />
      </subscriptions.Navigator>
    </DrawerScreenWrapper>
  );
};
const ResReqStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <ResRequest.Navigator
        screenOptions={getNavigationOptions}
        headerMode="screen">
        <ResRequest.Screen
          component={RestaurantRequest}
          name="RestaurantRequest"
          // options={{headerShown: false}}
        />
      </ResRequest.Navigator>
    </DrawerScreenWrapper>
  );
};

const SecretKeyStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <secretkey.Navigator
        screenOptions={getNavigationOptions}
        headerMode="screen">
        <secretkey.Screen component={SecretKey} name="SecretKey" />
      </secretkey.Navigator>
    </DrawerScreenWrapper>
  );
};

const HistoryStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <history.Navigator
        screenOptions={getNavigationOptions}
        headerMode="screen">
        <history.Screen component={History} name="History" />
        <history.Screen component={HistoryDetails} name="HistoryDetails" />
      </history.Navigator>
    </DrawerScreenWrapper>
  );
};

const ProvoStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <provo.Navigator screenOptions={getNavigationOptions} headerMode="screen">
        <provo.Screen component={ProvoScreen} name="ProvoScreen" />
      </provo.Navigator>
    </DrawerScreenWrapper>
  );
};

class DrawerNavigation extends Component {
  render() {
    return (
      <ImageBackground
        source={backgrounds.drawerBg}
        resizeMode="cover"
        style={{flex: 1}}
        imageStyle={{
          resizeMode: 'cover',
        }}>
        <Drawer.Navigator
          // hideStatusBar
          screenOptions={{
            headerShown: false,
            overlayColor: 'transparent',
            drawerStyle: {
              width: 70 * vw,
              backgroundColor: 'transparent',
            },
            sceneContainerStyle: {
              backgroundColor: 'transparent',
              overflow: 'visible',
              zIndex: 1,
            },
            drawerContentStyle: {
              flex: 1,
              backgroundColor: 'transparent',
            },

            drawerPosition: 'right',
          }}
          screenStyle={{borderRadius: vh * 5}}
          // screenOptions={options}
          drawerContent={props => {
            return <DrawerContent {...props} />;
          }}>
          <Drawer.Screen
            name="Home"
            options={{
              drawerLabel: 'Home',
              drawerIcon: drawericons.drawer1,
            }}
            component={AppStack}
          />
          <Drawer.Screen
            name="RestaurantRequests"
            options={{
              drawerLabel: 'Restaurant Request',
              drawerIcon: drawericons.drawer1,
            }}
            component={ResReqStack}
          />

          <Drawer.Screen
            name="SecretKeys"
            options={{
              drawerLabel: 'Secret Key',
              drawerIcon: drawericons.drawer2,
            }}
            component={SecretKeyStack}
          />

          <Drawer.Screen
            name="Histories"
            options={{
              drawerLabel: 'History',
              drawerIcon: drawericons.drawer3,
            }}
            component={HistoryStack}
          />

          <Drawer.Screen
            name="About"
            options={{
              drawerLabel: 'About Us',
              drawerIcon: drawericons.drawer4,
            }}
            component={AboutStack}
          />

          <Drawer.Screen
            name="Contact"
            options={{
              drawerLabel: 'Contact Us',
              drawerIcon: drawericons.drawer5,
            }}
            component={ContactStack}
          />

          <Drawer.Screen
            name="MySubscription"
            options={{
              drawerLabel: 'Subscription',
              drawerIcon: drawericons.drawer10,
            }}
            component={SubscriptionStack}
          />

          <Drawer.Screen
            name="RequestLog"
            options={{
              drawerLabel: 'Request Log',
              drawerIcon: drawericons.drawer7,
            }}
            component={ReqLogsStack}
          />

          <Drawer.Screen
            name="ProvoCash"
            options={{
              drawerLabel: 'ProvoCash',
              drawerIcon: drawericons.drawer9,
            }}
            component={ProvoStack}
          />
          <Drawer.Screen
            name="Logout"
            options={{
              drawerLabel: 'Logout',
              drawerIcon: drawericons.drawer8,
            }}
            component={ReqLogsStack}
          />
        </Drawer.Navigator>
      </ImageBackground>
    );
  }
}

export default DrawerNavigation;
