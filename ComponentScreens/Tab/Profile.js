import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import bgCover from '../../assets/bgimage.png';
import {useRoute, useFocusEffect} from '@react-navigation/native';

export const handleBackButton = () => {
  // ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
  return true;
};

export default function Profile({route, navigation}) {
  const {mail} = route.params;

  // useEffect(() => {
  //   const unsubscribe = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     handleBackButton,
  //   );

  //   return () => true;
  // }, []);

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
        <Text style={styles.title}>Welcome {mail}</Text>
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
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});
