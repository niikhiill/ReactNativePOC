import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchStack from './SearchStack';
import Details from './Details';

const Stack = createStackNavigator();

export default function searchIndex() {
  return (
    <Stack.Navigator initialRouteName="SearchStack">
      <Stack.Screen
        name="SearchStack"
        component={SearchStack}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="Details" component={Details}></Stack.Screen>
    </Stack.Navigator>
  );
}
