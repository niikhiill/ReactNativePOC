import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Settings() {
  return (
    <View>
      <Text>settings screen</Text>
    </View>
  );
}

export default function index() {
  return (
    // <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}
