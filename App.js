import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from './ComponentScreens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabScreen from './ComponentScreens/TabScreen';

const Stack = createStackNavigator();

function App(){
return(
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerStyle:{backgroundColor:'#193366' },headerTintColor: '#fff',}}/>
        <Stack.Screen name="tab" component={TabScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
)
}

export default App;