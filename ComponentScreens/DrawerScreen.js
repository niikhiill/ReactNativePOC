import React from 'react';
import { View,Text,StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();


function DrawerScreen(){
    return (
        <NavigationContainer>
        <Drawer.Navigator></Drawer.Navigator>
         </NavigationContainer>
    );
}
    
export default DrawerScreen;
