import React from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile/Profile';
import HomeStack from './Home/HomeStack';
import searchIndex from './Search/searchIndex';

const Tab = createBottomTabNavigator();

export default function index({route, navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        style: {
          backgroundColor: '#223343',
          height: 50,
        },
        labelStyle: {
          fontSize: 15,
          paddingBottom: 15,
        },
        activeTintColor: 'white',
      }}>
      <Tab.Screen
        name="Homestack"
        component={HomeStack}
        options={({route}) => ({
          tabBarVisible: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';

            if (routeName === 'Details') {
              return false;
            }
            if (routeName === 'Trending') {
              return false;
            }
            if (routeName === 'Upcoming') {
              return false;
            }

            return true;
          })(route),
        })}
      />

      <Tab.Screen
        name="searchIndex"
        component={searchIndex}
        options={({route}) => ({
          tabBarVisible: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';

            if (routeName === 'Details') {
              return false;
            }
            return true;
          })(route),
        })}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
