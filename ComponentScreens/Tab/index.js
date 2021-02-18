import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile/Profile';
import Home from './Home';
import Search from './Search';

const Tab = createBottomTabNavigator();

export default function index({route}) {
  const {mail} = route.params;
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        style: {
          backgroundColor: '#223343',
        },
        labelStyle: {
          fontSize: 15,
          paddingBottom: 10,
        },
        activeTintColor: 'white',
        activeBackgroundColor: '#ac3973',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        //used to hide bottomtab in specific screens
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
        name="Search"
        component={Search}
        //used to hide bottomtab in specific screens
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
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{mail: mail}}
      />
    </Tab.Navigator>
  );
}
