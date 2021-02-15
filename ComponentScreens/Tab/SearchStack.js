import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import bgCover from '../../assets/bgimage.png';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function SearchStack({navigation}) {
  const apiurl =
    'https://api.themoviedb.org/3/search/movie?api_key=51c5d477ec9bd7b3e52386828e267f99';

  const [state, setState] = useState({
    s: 'enter a movie...',
    results: [],
    selected: {},
  });

  const search = () => {
    axios(apiurl + '&query=' + state.s).then(({data}) => {
      let results = data.results;
      // console.log(results);
      setState((prevState) => {
        return {prevState, results: results};
      });
    });
  };

  return (
    <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchbox}
          onChangeText={(text) =>
            setState((prevState) => {
              return {...prevState, s: text};
            })
          }
          placeholder="Search..."
          onSubmitEditing={search}
          autoCorrect={false}
        />

        <ScrollView style={styles.results}>
          {state.results.map((result) => (
            <TouchableOpacity
              key={result.id}
              onPress={() =>
                navigation.navigate('Details', {
                  title: result.title,
                  overview: result.overview,
                  poster_path: result.poster_path,
                  date: result.release_date,
                  popularity: result.popularity,
                  genre: result.genre_ids,
                  vote: result.vote_average,
                })
              }>
              <View style={styles.result}>
                <Image
                  source={{
                    uri:
                      'https://image.tmdb.org/t/p/original/' +
                      result.poster_path,
                  }}
                  style={{
                    width: 70,
                    height: 100,
                  }}
                  resizeMode="cover"
                  backgroundColor="#445565"
                />
                <View style={{width: '75%'}}>
                  <Text style={styles.heading}>{result.title}</Text>
                  <Text style={styles.datestyle}>{result.release_date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  searchbox: {
    fontSize: 18,
    fontWeight: '300',
    width: '90%',
    height: 58,
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 40,
    borderRadius: 50,
    marginTop: 60,
  },
  results: {
    flex: 1,
  },
  result: {
    flex: 1,
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    borderColor: '#fff',
    borderBottomWidth: 1,
    // alignItems: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    padding: 10,
    // backgroundColor: '#708090',
    width: '75%',
  },
  datestyle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 10,
    // backgroundColor: '#708090',
    width: '75%',
  },
});
