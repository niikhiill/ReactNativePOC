import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeMovies from './HomeMovies';
import Details from '../Details';
import Upcoming from './UpcomingMovies';
import Trending from './TrendingMovies';

const Stack = createStackNavigator();

export default function HomeStack({route, navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="HomeMovies"
      screenOptions={{
        headerStyle: {backgroundColor: '#223343'},
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
      headerMode="float">
      <Stack.Screen
        name="HomeMovies"
        component={HomeMovies}
        options={{
          headerLeft: () => (
            <Button
              title="I=I"
              onPress={() => navigation.toggleDrawer()}
              color="#223343"
            />
          ),
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#223343'},
        }}></Stack.Screen>
      <Stack.Screen name="Details" component={Details}></Stack.Screen>
      <Stack.Screen name="Upcoming" component={Upcoming}></Stack.Screen>
      <Stack.Screen name="Trending" component={Trending}></Stack.Screen>
    </Stack.Navigator>
  );
}
