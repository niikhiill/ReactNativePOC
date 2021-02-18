import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import bgCover from '../../../assets/bgimage.png';
import {useFocusEffect} from '@react-navigation/native';

export default function Profile({route, navigation}) {
  const {mail} = route.params;

  //Used to prevent android back button
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'Profile') {
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );

  return (
    <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
      <View style={styles.ViewStyle}>
        <Text style={styles.Title}>Welcome {mail} !</Text>
        <TouchableOpacity
          style={{marginTop: 15}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.Logout}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  Logout: {
    fontSize: 20,
    color: '#223343',
    fontWeight: 'bold',
  },
});
