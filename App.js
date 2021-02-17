import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Login from './ComponentScreens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import index from './ComponentScreens/Tab';
import Drawer from './ComponentScreens/Drawer/index';

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tab"
          component={index}
          options={{
            headerLeft: () => (
              <Button title="hello" onPress={() => alert('hello')} />
            ),
            headerStyle: {backgroundColor: '#193366'},
            headerTintColor: '#fff',
            gestureEnabled: false,
          }}
        />
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
