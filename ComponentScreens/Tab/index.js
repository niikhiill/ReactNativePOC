import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import {color} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

export default function index({route, navigation}) {
  // const {mail} = route.params;
  //console.log(JSON.stringify(mail));

  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    // <Text>Welcome {JSON.stringify(mail)}</Text>
  );
}
