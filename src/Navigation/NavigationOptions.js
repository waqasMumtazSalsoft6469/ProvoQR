import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {Image, View, ImageBackground} from 'react-native';
import styles from './styles';
import IconButton from '../components/Buttons/IconButton';
import {icons} from '../assets/images';
import JostRegular from '../components/Text/JostRegular';
import TouchableHOC from '../components/Buttons/TouchableHOC';
import {vh, vw} from '../Utils/Units';
import ThemeColors from '../Utils/ThemeColors';
import OutfitMediumText from '../components/Text/OutfitMediumText';
import OutfitSemiBoldText from '../components/Text/OutfitSemiBoldText';
import store from '../Redux/store';
import {imageUrl} from '../Api/configs';

const headerLeftBackBtnRoutes = {
  HomeScreen: 'HomeScreen',
  Location: 'Location',
  Payment: 'Payment',
  Profile: 'Profile',
  EditProfile: 'Edit Profile',
  ChangePassword: 'Change Password',
  Notification: 'Notifications',
  ProvoPaymentMethod: 'Payment',
  ResturentDetail: 'Restaurant Detail',
  RestaurantDirection: 'Map',
  ResturentMenu: 'Menu',
  LootBoxPaymentMethod: 'Payment',
  RestaurantListScreen: 'RestaurantListScreen',
  RecommendedRestaurantList: 'RecommendedRestaurantList',
  CategoryListScreen: 'CategoryListScreen',
  MapScreen: 'Map',
  RewardScreen: 'Reward Library',
  RewardDetail: 'Redeem Reward',
  RestaurantRequest: 'RestaurantRequest',
  SecretKey: 'SecretKey',
  History: 'History',
  HistoryDetails: 'History Details',
  AboutUs: 'About Us',
  ContactUs: 'Contact Us',
  MySubscriptions: 'Subscription',
  SubscriptionLogs: 'Subscription Logs',
  RequestLogs: 'RequestLogs',
  ProvoScreen: 'ProvoScreen',
  HappyHourMenuScreen: 'Happy Hour',
};

const titleRoutes = {
  Location: 'Location',
  Payment: 'Payment',
  Profile: 'Profile',
  EditProfile: 'Edit Profile',
  ChangePassword: 'Change Password',
  Notification: 'Notification',
  ProvoPaymentMethod: 'Payment',
  ResturentDetail: 'Restaurant Detail',
  RestaurantDirection: 'Map',
  ResturentMenu: 'Menu',
  LootBoxPaymentMethod: 'Payment',
  MapScreen: 'Map',
  RewardScreen: 'Reward Library',
  RewardDetail: 'Redeem Reward',
  History: 'History',
  HistoryDetails: 'History Details',
  AboutUs: 'About Us',
  ContactUs: 'Contact Us',
  MySubscriptions: 'Subscription',
  SubscriptionLogs: 'Subscription Logs',
  ProvoScreen: 'Provo',
  HappyHourMenuScreen: 'Happy Hour',
};

const headerRightRoutes = {
  Profile: 'Profile',
  ResturentDetail: 'Restaurant Detail',
  ResturentMenu: 'Menu',
  LootBoxPaymentMethod: 'Payment',
  HomeScreen: 'HomeScreen',
  MySubscriptions: 'Subscription',
  SubscriptionLogs: 'Subscription Logs',
  ProvoScreen: 'ProvoScreen',
  HappyHourMenuScreen: 'Happy Hour',
};

export const getNavigationOptions = props => {
  var activeRouteName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : props.route.name;

  return {
    ...TransitionPresets.SlideFromRightIOS,
    title: getTitle(props),
    headerTitleAlign: 'center',
    headerLeft: () => showHeaderLeft(props),
    headerRight: () => showHeaderRight(props),
    headerStyle: styles.defaultHeaderStyle,
    headerTitleStyle: styles.headingText,
    headerRightContainerStyle: styles.defaultHeaderRightContainerStyle,
    headerLeftContainerStyle: styles.defaultHeaderLeftContainerStyle,
  };
};

export const getTitle = props => {
  if (titleRoutes[props?.route?.name]) {
    return titleRoutes[props?.route?.name];
  }
  return '';
};

export const showHeaderRight = props => {
  const data = store.getState();

  const count =
    data.GeneralReducer.notificationCount !== null
      ? data.GeneralReducer.notificationCount
      : 0;

  const profile = data?.SessionReducer.userData;
  // console.log('notification_count', profile?.image);

  const token = data?.SessionReducer?.token;

  if (headerRightRoutes[props?.route?.name]) {
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
              <JostRegular style={styles.count}>{count}</JostRegular>
            </View>
          </ImageBackground>
        </TouchableHOC>
        <TouchableHOC
          style={styles.profileContainer}
          onPress={() => props.navigation.navigate('Profile')}>
          <Image
            source={
              profile?.image
                ? {
                    uri: imageUrl + profile?.image,
                  }
                : icons.purpleprofile
            }
            resizeMode="cover"
            style={styles.profile}
          />
        </TouchableHOC>
      </View>
    );
  }
};

export const showHeaderLeft = props => {
  if (headerLeftBackBtnRoutes[props?.route?.name] === 'HomeScreen') {
    return (
      <View style={styles.homeLeftHeaderContainer}>
        <OutfitMediumText style={styles.homeHeaderText}>
          Grab Your
        </OutfitMediumText>
        <OutfitSemiBoldText style={styles.headerTextBold}>
          Delicious Meal Now!
        </OutfitSemiBoldText>
      </View>
    );
  } else {
    return (
      <IconButton
        style={{}}
        icon={icons.backarrow}
        onPress={() => props.navigation.goBack()}
      />
    );
  }
};
