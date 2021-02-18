import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchMovie from './SearchMovie';
import Details from '../Details';

const Stack = createStackNavigator();

export default function searchIndex({navigation}) {
  return (
    <Stack.Navigator initialRouteName="SearchStack">
      <Stack.Screen
        name="SearchMovie"
        component={SearchMovie}
        options={{
          headerLeft: () => (
            <Button
              title="I=I"
              onPress={() => navigation.toggleDrawer()}
              color="#223343"
            />
          ),
          headerTitle: 'Search',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#223343'},
        }}></Stack.Screen>
      <Stack.Screen name="Details" component={Details}></Stack.Screen>
    </Stack.Navigator>
  );
}
