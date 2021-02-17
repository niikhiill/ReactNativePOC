import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Details from '../Details';
import Upcoming from './UpcomingMovies';
import Trending from './TrendingMovies';

const Stack = createStackNavigator();

export default function HomeStack({route, navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="Upcoming" component={Upcoming}></Stack.Screen>
      <Stack.Screen name="Trending" component={Trending}></Stack.Screen>
    </Stack.Navigator>
  );
}
