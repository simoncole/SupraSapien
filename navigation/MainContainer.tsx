import * as React from 'react'
import { View } from 'react-native';

import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProtocolsScreen from './screens/ProtocolsScreen';
import ProfileScreen from './screens/ProfileScreen';

//Screen names
const homeScreenName = "My Day"
const protocolsScreenName = "Protocols"
const profileScreenName = "Profile"

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <Tab.Navigator initialRouteName={homeScreenName} >
            <Tab.Screen name={homeScreenName} component={HomeScreen} />
            <Tab.Screen name={protocolsScreenName} component={ProtocolsScreen} />
            <Tab.Screen name={profileScreenName} component={ProfileScreen} />
        </Tab.Navigator>
    );
}