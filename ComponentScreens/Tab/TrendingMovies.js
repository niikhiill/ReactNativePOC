import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import bgCover from '../../assets/bgimage.png';

export default class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesTrending: [],
    };
  }

  componentDidMount() {
    this.fetchTrendingMovies();
  }

  fetchTrendingMovies() {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=51c5d477ec9bd7b3e52386828e267f99',
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({moviesTrending: responseJson});
      })
      .catch((error) => {
        console.log('Data fetching failed');
      });
  }

  render() {
    const {moviesTrending} = this.state;
    return (
      <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              padding: 20,
            }}>
            Trending Now
          </Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns="2"
            data={moviesTrending.results}
            renderItem={({item}) => (
              <View style={{margin: 10, height: 320}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Details', {
                      title: item.title,
                      overview: item.overview,
                      poster_path: item.poster_path,
                      date: item.release_date,
                      popularity: item.popularity,
                      genre: item.genre_ids,
                      vote: item.vote_average,
                    })
                  }>
                  <Image
                    style={{height: 250, width: 180, borderRadius: 17}}
                    source={{
                      uri:
                        'https://image.tmdb.org/t/p/original/' +
                        item.poster_path,
                    }}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    width: 175,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white', fontSize: 17}}>
                    {item.title}
                  </Text>
                </View>

                <View
                  style={{
                    width: 175,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 7,
                  }}>
                  <Text style={{color: 'white', fontSize: 12}}>
                    {item.release_date}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item, key) => key.toString()}
            showsHorizontalScrollIndicator={false}></FlatList>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingBottom: 100,
  },
});
