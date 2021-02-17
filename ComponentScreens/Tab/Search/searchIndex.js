import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchStack from './SearchStack';
import Details from '../Details';

const Stack = createStackNavigator();

export default function searchIndex({navigation}) {
  return (
    <Stack.Navigator initialRouteName="SearchStack">
      <Stack.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          headerLeft: () => (
            <Button title="hello" onPress={() => navigation.toggleDrawer()} />
          ),
          headerTitle: 'Movies Search',
        }}></Stack.Screen>
      <Stack.Screen name="Details" component={Details}></Stack.Screen>
    </Stack.Navigator>
  );
}
