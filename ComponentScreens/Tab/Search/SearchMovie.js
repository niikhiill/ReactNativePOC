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
import bgCover from '../../../assets/bgimage.png';

export default function SearchStack({navigation}) {
  const apiurl =
    'https://api.themoviedb.org/3/search/movie?api_key=51c5d477ec9bd7b3e52386828e267f99';

  const [state, setState] = useState({
    movies: [],
  });

  const search = () => {
    axios(apiurl + '&query=' + state.text).then(({data}) => {
      let movies = data.results;
      // console.log(movies);
      setState((prevState) => {
        return {prevState, movies: movies};
      });
    });
  };

  return (
    <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchBox}
          onChangeText={(text) =>
            setState((prevState) => {
              return {...prevState, text: text};
            })
          }
          placeholder="Search..."
          onSubmitEditing={search}
          autoCorrect={false}
        />
        <ScrollView style={styles.results}>
          {state.movies.map((movie) => (
            <TouchableOpacity
              key={movie.id}
              onPress={() =>
                navigation.navigate('Details', {
                  title: movie.title,
                  overview: movie.overview,
                  poster_path: movie.poster_path,
                  date: movie.release_date,
                  popularity: movie.popularity,
                  genre: movie.genre_ids,
                  vote: movie.vote_average,
                })
              }>
              <View style={styles.result}>
                <Image
                  source={{
                    uri:
                      'https://image.tmdb.org/t/p/original/' +
                      movie.poster_path,
                  }}
                  style={{
                    width: 70,
                    height: 100,
                  }}
                  resizeMode="cover"
                  backgroundColor="#445565"
                />
                <View style={{width: '75%'}}>
                  <Text style={styles.heading}>{movie.title}</Text>
                  <Text style={styles.datestyle}>{movie.release_date}</Text>
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

  searchBox: {
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
  },
  heading: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    padding: 10,
    width: '75%',
  },
  datestyle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 10,
    width: '75%',
  },
});
