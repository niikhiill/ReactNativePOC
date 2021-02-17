import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Login from './ComponentScreens/Login';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import index from './ComponentScreens/Tab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabStack from './ComponentScreens/Tab/index';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function Settings() {
  // const user = navigation.getParam('user');
  // const {user} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>gvc!</Text>
    </View>
  );
}

function DrawerStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TabStack" component={TabStack} />
      {/* <Drawer.Screen name="Settings" component={Settings} /> */}
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
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
        /> */}
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
        {/* <Stack.Screen name="TabStack" component={TabStack} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
