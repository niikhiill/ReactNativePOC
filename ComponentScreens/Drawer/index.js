import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tab from '../Tab';

const Drawer = createDrawerNavigator();

function Settings({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'plum',
      }}>
      <Text style={{fontSize: 20, fontWeight: '900'}}>
        This is the Settings Screen!
      </Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={{color: 'blue'}}>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function index() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Tab"
        component={Tab}
        options={{
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
