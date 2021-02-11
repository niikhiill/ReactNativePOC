import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import bgCover from '../../assets/bgimage.png';

export default function Profile({route, navigation}) {
  const {mail} = route.params;
  return (
    <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
      <View style={styles.ViewStyle}>
        <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
          Welcome {JSON.stringify(mail)}
        </Text>
        <TouchableOpacity
          style={{marginTop: 15}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize: 20, color: 'blue'}}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
