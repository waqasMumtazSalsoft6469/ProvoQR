import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ThemeColors from '../Utils/ThemeColors';
import HomeStack from './HomeStack';
import GiftStack from './GiftStack';
import QrcodeStack from './QrcodeStack';
import MapStack from './MapStack';
import {vh, vw} from '../Utils/Units';
import {icons, tabicons} from '../assets/images';
import Drawer from './NavigationDrawer';
import {createDrawerNavigator, DrawerActions} from '@react-navigation/drawer';

import IconButton from '../components/Buttons/IconButton';

const TabNavigator = createMaterialTopTabNavigator();

const activeIcons = [
  tabicons.tab1,
  tabicons.tab2,
  // tabicons.tab3,
  tabicons.tab4,
  tabicons.tab5,
];
const inactiveIcons = [
  tabicons.tab1,
  tabicons.tab2,
  // tabicons.tab3,
  tabicons.tab4,
  tabicons.tab5,
];
const HomeTabs = props => {
  return (
    <TabNavigator.Navigator
      style={{}}
      tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}
      lazy={true}
      tabBarPosition="bottom">
      <TabNavigator.Screen name="HomeStack" component={HomeStack} />
      <TabNavigator.Screen name="MapStack" component={MapStack} />
      {/* <TabNavigator.Screen name="QrcodeStack" component={QrcodeStack} /> */}
      <TabNavigator.Screen name="GiftStack" component={GiftStack} />
      <TabNavigator.Screen name="Drawer" component={Drawer} />
    </TabNavigator.Navigator>
  );
};
export default HomeTabs;

const MyTabBar = ({state, navigation}, props) => {
  const getIcon = (isFocused, index) => {
    if (isFocused) {
      return activeIcons[index];
    } else {
      return inactiveIcons[index];
    }
  };
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (route.name == 'Drawer') {
            navigation.toggleDrawer();
          } else if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        if (route.name == 'QrcodeStack') {
          return (
            <View
              style={{
                alignItems: 'center',
              }}>
              <View style={[styles.centreViewStyles, {marginBottom: 2 * vh}]}>
                <IconButton
                  icon={getIcon(isFocused, index)}
                  style={styles.iconStyle}
                  iconStyle={styles.btnStyle}
                  key={index}
                  onPress={onPress}
                />
              </View>
              {isFocused ? (
                <View
                  style={[
                    styles.indicatorStyle,
                    {bottom: 1.5 * vh, width: 8 * vw},
                  ]}></View>
              ) : null}
            </View>
          );
        }

        return (
          <View
            style={{
              alignItems: 'center',
              width: 6 * vw,
              height: 6 * vw,
              marginBottom: vh * 2,
            }}>
            <IconButton
              icon={getIcon(isFocused, index)}
              style={styles.iconStyle}
              iconStyle={styles.btnStyle}
              key={index}
              onPress={onPress}
            />
            {isFocused && <View style={styles.indicatorStyle}></View>}
          </View>
        );
      })}
    </View>
  );
};
