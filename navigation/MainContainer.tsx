import * as React from 'react'
import { View } from 'react-native';

import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles/GlobalStyles';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProtocolsScreen from './screens/ProtocolsScreen';
import ProfileScreen from './screens/ProfileScreen';
import TabBar from '../components/TabBar';

//Screen names
const homeScreenName = "My Day"
const protocolsScreenName = "Protocols"
const profileScreenName = "Profile"

//tabBar={(props) => <TabBar {...props} />}
const Tab = createBottomTabNavigator();
const tabHeaderOptions: any = {
    headerStyle: {
        backgroundColor: '#353535',
        borderBottomColor: '#353535',
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
    }}

export default function MainContainer(){
    return(
        <Tab.Navigator initialRouteName={homeScreenName} screenOptions={{
            tabBarStyle: {
                backgroundColor: '#353535'
            }
        }}>
            <Tab.Screen name={homeScreenName} component={HomeScreen} options={tabHeaderOptions}/>
            <Tab.Screen name={protocolsScreenName} component={ProtocolsScreen} options={tabHeaderOptions}/>
            <Tab.Screen name={profileScreenName} component={ProfileScreen} options={tabHeaderOptions}/>
        </Tab.Navigator>
    );
}