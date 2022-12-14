import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {
  StatusBar,
  Image,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import IconButton from '../components/Buttons/IconButton';
import {backgrounds, icons, sampleimage, sampleImages} from '../assets/images';
import Header from './headerbackground';
import JostRegular from '../components/Text/JostRegular';
import TouchableHOC from '../components/Buttons/TouchableHOC';
import {vh, vw} from '../Utils/Units';
import ThemeColors from '../Utils/ThemeColors';

export const getNavigationOptions = props => {
  var activeRouteName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : props.route.name;

  return {
    ...defaultOptions(activeRouteName, props),
    ...TransitionPresets.SlideFromRightIOS,
    headerShown: shouldHeaderBeShown(activeRouteName),
    headerTitle: getTitle(activeRouteName),

    headerBackground: () => null,
  };
};
export const setStatusBar = (activeRouteName, settings) => {
  // StatusBar.setBackgroundColor('rgba(255,255,255,0.13)', true);
  // StatusBar.setTranslucent(true);
  StatusBar.setBarStyle('dark-content', true);
};
export const shouldHeaderBeShown = activeRouteName => {
  setStatusBar(activeRouteName);
  switch (activeRouteName) {
    // case 'HomeScreen':
    // case 'Login':
    // case 'Signup':
    // case 'PasswordRecovery':
    // case 'Subscription':
    case 'Payment':
    case 'SuccessScreen':
    case 'RewardScreen':
    case 'RewardDetail':
    case 'ContactUs':
    case 'AboutUs':
    case 'Notification':
    case 'EditProfile':
    case 'Profile':
    case 'ChangePassword':
    case 'RestaurantRequest':
    case 'RequestLogs':
    case 'SecretKey':
    case 'History':
    case 'HistoryDetails':
    case 'QRcodeScreen':
    case 'QRcodeSuccess':
    case 'Location':
    case 'MapScreen':
    case 'ShowonMapScreen':
    case 'MySubscriptions':
    case 'ResturentDetail':
    case 'SubscriptionLogs':
    case 'EditBillingDetails':
    case 'ResturentCampaignDetails':
    case 'CampaignDetail':
    case 'ProvoScreen':
    case 'ProvoPaymentMethod':
    case 'LootBoxPaymentMethod':
    case 'RestaurantDirection':
      return true;

    default:
      return false;
  }
};
export const getTitle = activeRouteName => {
  switch (activeRouteName) {
    case 'Login':
      return 'Login';

    case 'Signup':
      return 'Sign Up';

    case 'PasswordRecovery':
      return 'Forgot Password';

    case 'Subscription':
      return 'Subscription';

    case 'Payment':
      return 'Payment';
    case 'SuccessScreen':
      return 'Subscription';

    case 'RewardScreen':
      return 'Reward Library';

    case 'RewardDetail':
      return 'Reward Details';

    case 'ContactUs':
      return 'Contact Us';

    case 'AboutUs':
      return 'About Us';

    case 'Notification':
      return 'Notifications';

    case 'Profile':
      return 'Profile';

    case 'EditProfile':
      return 'Edit Profile';

    case 'History':
      return 'History';

    case 'HistoryDetails':
      return 'Finest Dining';

    case 'QRcodeScreen':
      return 'Scan QR Code';

    case 'QRcodeSuccess':
      return 'Scan QR Code';

    case 'Location':
      return 'Location';

    case 'MapScreen':
      return 'Map';

    case 'ShowonMapScreen':
      return 'Map';

    case 'ResturentDetail':
      return 'Finest Dining';
    case 'MySubscriptions':
      return 'Subscription';

    case 'SubscriptionLogs':
      return 'Subscription Logs';
    case 'CampaignDetail':
      return 'Finest Dining';
    case 'ResturentCampaignDetails':
      return 'Finest Dining';
    case 'ResturentMenu':
      return 'Menu';
    case 'ProvoScreen':
      return 'Provo';
    case 'RestaurantDirection':
      return 'Map';
    default:
      return '';
  }
};
export const showHeaderRight = (activeRouteName, props, onBackPress) => {
  if (
    (activeRouteName =
      'RewardScreen' ||
      activeRouteName == 'RewardDetail' ||
      activeRouteName == 'ContactUs' ||
      activeRouteName == 'AboutUs' ||
      activeRouteName == 'Notification' ||
      activeRouteName == 'Profile' ||
      activeRouteName == 'EditProfile' ||
      activeRouteName == 'ChangePassword' ||
      activeRouteName == 'RestaurantRequest' ||
      activeRouteName == 'RequestLogs' ||
      activeRouteName == 'SecretKey' ||
      activeRouteName == 'QRcodeScreen' ||
      activeRouteName == 'ProvoScreen' ||
      activeRouteName == 'ProvoPaymentMethod' ||
      activeRouteName == 'QRcodeSuccess')
  ) {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableHOC onPress={() => props.navigation.navigate('Location')}>
          <Image
            source={icons.whiteloc}
            resizeMode="contain"
            style={styles.profile}
          />
        </TouchableHOC>
        <TouchableHOC onPress={() => props.navigation.navigate('Notification')}>
          <ImageBackground
            source={icons.notif}
            resizeMode="contain"
            style={{width: 6 * vw, height: 6 * vw, alignItems: 'flex-end'}}
            imageStyle={{
              width: 6 * vw,
              height: 6 * vw,
              tintColor: ThemeColors.iconColor,
            }}>
            <View style={styles.circle}>
              <JostRegular style={styles.count}>5</JostRegular>
            </View>
          </ImageBackground>
        </TouchableHOC>
        <TouchableHOC onPress={() => props.navigation.navigate('Profile')}>
          <Image
            source={sampleimage.profile}
            resizeMode="contain"
            style={styles.profile}
          />
        </TouchableHOC>
      </View>
    );
  }
};
const renderBackButton = (activeRouteName, props) => {
  return (
    <IconButton
      style={{}}
      icon={icons.backarrow}
      onPress={() => props.navigation.goBack()}
    />
  );
};
const renderDrawer = props => {
  return (
    <TouchableHOC onPress={() => props.navigation.toggleDrawer()}>
      <Image source={icons.menu} style={styles.menu} resizeMode="contain" />
    </TouchableHOC>
  );
};

export const showHeaderLeft = (activeRouteName, props) => {
  // return renderBackButton(activeRouteName, navigation);
  switch (activeRouteName) {
    case 'HomeTabs':
    case 'RestaurantRequest':
    case 'SecretKey':
    case 'ContactUs':
    case 'RequestLogs':
    case 'AboutUs':
    case 'History':
    case 'MySubscriptions':
    case 'MapScreen':
    case 'QRcodeScreen':
    case 'RewardScreen':
    case 'RewardDetail':
    case 'ContactUs':
    case 'AboutUs':
    case 'Notification':
    case 'Profile':
    case 'EditProfile':
    case 'ChangePassword':
    case 'RestaurantRequest':
    case 'RequestLogs':
    case 'SecretKey':
    case 'HistoryDetails':
    case 'QRcodeSuccess':
    case 'Location':
    case 'ResturentDetail':
    case 'ResturentMenu':
    case 'EditBillingDetails':
    case 'SubscriptionLogs':
    case 'ResturentCampaignDetails':
    case 'CampaignDetail':
    case 'MapScreen':
    case 'ProvoScreen':
    case 'ProvoPaymentMethod':
    case 'LootBoxPaymentMethod':
    case 'Payment':
    case 'RestaurantDirection':
      return renderBackButton(activeRouteName, props);
    default:
      return null;
  }
};
export const defaultOptions = (activeRouteName, props) => {
  return {
    ...TransitionPresets.SlideFromRightIOS,
    headerRight: () =>
      activeRouteName == 'Login' ||
      activeRouteName == 'CompleteProfile' ||
      activeRouteName == 'Location' ||
      activeRouteName == 'Signup' ||
      activeRouteName == 'PasswordRecovery' ||
      activeRouteName == 'Subscription' ||
      activeRouteName == 'Payment' ||
      activeRouteName == 'SuccessScreen' ||
      activeRouteName == 'DrawerStack' ||
      activeRouteName == 'RestaurantDirection'
        ? null
        : showHeaderRight(activeRouteName, props),
    headerLeft: () => showHeaderLeft(activeRouteName, props),
    headerTitleAlign: 'center',

    headerTitleStyle: styles.defaultHeaderTitleStyle,
    headerTitleContainerStyle: styles.defaultHeaderTitleContainerStyle,
    headerRightContainerStyle: styles.defaultHeaderRightContainerStyle,
    headerLeftContainerStyle: styles.defaultHeaderLeftContainerStyle,
    headerTitleAllowFontScaling: true,
    headerStyle: styles.deafultHeaderStyle,
  };
};
