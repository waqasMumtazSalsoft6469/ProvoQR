import {createStackNavigator} from '@react-navigation/stack';
import React from 'react'
import SettingScreen from '../screens/SettingsScreen'


import { getNavigationOptions } from './NavigationOptions';

const SettingsNavigator = createStackNavigator();

const MenuStack = () => {
    return (
        <SettingsNavigator.Navigator screenOptions={getNavigationOptions}>
            
           
            <SettingsNavigator.Screen component={SettingScreen} name='SettingScreen'/>
               
                     
        </SettingsNavigator.Navigator>
    )
}
export default MenuStack