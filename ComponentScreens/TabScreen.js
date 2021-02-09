import React from 'react';
import { View,Text,StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';


const Tab = createBottomTabNavigator();


function TabScreen(){
    return (
         <Tab.Navigator initialRouteName = "profile">
         <Tab.Screen name="home" component= {HomeScreen} />
            <Tab.Screen name="search" component= {SearchScreen}/>
              <Tab.Screen name="profile" component={ProfileScreen} />
         </Tab.Navigator>
    );
}
    

export default TabScreen;
