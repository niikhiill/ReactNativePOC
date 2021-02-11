import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import {color} from 'react-native-reanimated';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function index({route, navigation}) {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen name="Homestack" component={HomeStack} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
