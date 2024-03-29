import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeStack from './HomeStack';
import GiftStack from './GiftStack';
import MapStack from './MapStack';
import {vh, vw} from '../Utils/Units';
import {tabicons} from '../assets/images';
import Drawer from './NavigationDrawer';
import IconButton from '../components/Buttons/IconButton';
import {useSelector} from 'react-redux';
import {
  DrawerActions,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';

const TabNavigator = createMaterialTopTabNavigator();

const tabIcons = {
  HomeStack: {
    icon: tabicons.tab1,
  },
  MapStack: {
    icon: tabicons.tab2,
  },
  GiftStack: {
    icon: tabicons.tab4,
  },
  Drawer: {
    icon: tabicons.tab5,
  },
};
const HomeTabs = props => {
  const token = useSelector(state => state.SessionReducer.token);
  return (
    <TabNavigator.Navigator
      tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}
      // lazy={true}
      // tabBarOptions={{
      //   swipeEnabled: false, // Disable swipe between screens
      //   lazy: true, // Render the screens only when they are focused
      //   // Add other tabBarOptions as needed
      // }}
      screenListeners={{swipeEnabled: false, lazy: true}}
      tabBarPosition="bottom">
      <TabNavigator.Screen name="HomeStack" component={HomeStack} />
      <TabNavigator.Screen name="MapStack" component={MapStack} />
      {token && <TabNavigator.Screen name="GiftStack" component={GiftStack} />}
    </TabNavigator.Navigator>
  );
};
export default HomeTabs;

const MyTabBar = ({state, navigation}, props) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const isFocusedCurrentScreen = useIsFocused();
        const onPress = () => {
          // console.log('Route State New 12 >>>>>>', state);
          // console.log('Clicked Tab Stack >>>', state.routes[index]);
          // console.log('Route New >>>', route);
          // return;
          if (
            route.state &&
            route.name === 'HomeStack' &&
            route.state.index != 0
          ) {
            navigation.reset({
              index: 0,
              routes: [{name: 'MainNavigator'}],
            });
          }
          if (route.name == 'Drawer') {
            navigation.toggleDrawer();
          } else if (!isFocused) {
            navigation.navigate(route.name);
          }
        };
        return (
          <View
            key={index}
            style={{
              alignItems: 'center',
              width: 6 * vw,
              height: 6 * vw,
              marginBottom: vh * 2,
            }}>
            <IconButton
              icon={tabIcons[route?.name].icon}
              style={styles.iconStyle}
              iconStyle={styles.btnStyle}
              key={index}
              onPress={onPress}
            />
            {isFocused && <View style={styles.indicatorStyle} />}
          </View>
        );
      })}
      <View
        style={{
          alignItems: 'center',
          width: 6 * vw,
          height: 6 * vw,
          marginBottom: vh * 2,
        }}>
        <IconButton
          icon={tabicons.tab5}
          style={styles.iconStyle}
          iconStyle={styles.btnStyle}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        {/* {isFocused && <View style={styles.indicatorStyle} />} */}
      </View>
    </View>
  );
};
