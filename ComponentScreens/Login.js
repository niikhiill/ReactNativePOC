import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import bgCover from '../assets/bgimage.png';
import {NavigationContainer} from '@react-navigation/native';
import index from './Tab';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
    };
  }

  ValidateFields = () => {
    const {mail, password} = this.state;

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!mail.match(mailformat)) {
      alert('Please provide valid email');
      return false;
    } else if (password == '') {
      alert('Please provide valid password');
      return false;
    } else if (password.length < 8) {
      alert('Weak Password!! Password should be of length more than 8');
      return false;
    } else {
      alert('Logged In');
      return true;
    }
  };

  render() {
    const {mail, password} = this.state;
    return (
      <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
        <KeyboardAvoidingView behavior="padding" style={styles.ViewStyle}>
          <Text style={styles.TextStyle}>Sign In</Text>

          <TextInput
            style={styles.TextInputStyle1}
            placeholder="Login"
            placeholderTextColor={'rgba(255,255,255,0.3)'}
            onChangeText={(value) => this.setState({mail: value})}
            autoCorrect={false}
          />

          <TextInput
            style={styles.TextInputStyle2}
            placeholder="Password"
            placeholderTextColor={'rgba(255,255,255,0.3)'}
            onChangeText={(value) => this.setState({password: value})}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.ButtonStyle}
            onPress={() =>
              this.ValidateFields()
                ? this.props.navigation.navigate('Tab', {
                    screen: 'Profile',
                    params: {mail},
                  })
                : null
            }>
            <Text style={{color: 'white', fontSize: 20}}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.container}>
            <View>
              <TouchableOpacity>
                <Text style={{fontSize: 18, color: 'white'}}>
                  Forgot Your Password?
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={{fontSize: 18, color: 'white'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextStyle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },

  TextInputStyle1: {
    height: 58,
    width: '95%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: 'rgba(255,255,255,0.7)',
    marginTop: 25,
    fontSize: 20,
    padding: 15,
    justifyContent: 'center',
  },

  TextInputStyle2: {
    height: 58,
    width: '95%',
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: 'rgba(255,255,255,0.7)',
    fontSize: 20,
    padding: 15,
    justifyContent: 'center',
  },

  ButtonStyle: {
    height: 50,
    width: '95%',
    backgroundColor: '#cc6699',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  container: {
    marginTop: 20,
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
  },
});
