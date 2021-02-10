import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from './ComponentScreens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import index from './ComponentScreens/Tab';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {backgroundColor: '#193366'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Tab" component={index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
