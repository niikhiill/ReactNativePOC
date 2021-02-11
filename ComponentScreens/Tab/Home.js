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

// const API_URL = 'https://api.themoviedb.org/3';
// const API_NAME = '/trending/all/week';
// const API_KEY = '51c5d477ec9bd7b3e52386828e267f99';
// const IMAGE_DOMAIN_URL = 'https://image.tmdb.org/t/p/original/';

class TrendingMovie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;

    return (
      <View style={{margin: 10, height: 300, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => alert(item.title)}>
          <Image
            style={{height: 250, width: 180}}
            source={{
              uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path,
            }}
          />
        </TouchableOpacity>

        <View
          style={{width: 175, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 17}}>{item.title}</Text>
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
    );
  }
}

class UpcomingMovie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;
    return (
      <View style={{margin: 10, height: 300, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.props.navigation.push('Details')}>
          <Image
            style={{height: 250, width: 180}}
            source={{
              uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path,
            }}
          />
        </TouchableOpacity>
        <View
          style={{width: 175, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 17}}>{item.title}</Text>
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
    );
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesTrending: [],
      moviesUpcoming: [],
    };
  }
  componentDidMount() {
    this.fetchTrendingMovies();
    this.fetchUpcomingingMovies();
  }

  fetchTrendingMovies() {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=51c5d477ec9bd7b3e52386828e267f99',
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({moviesTrending: responseJson});
      })
      .catch((error) => {
        console.log('Data fetching failed');
      });
  }

  fetchUpcomingingMovies() {
    fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=51c5d477ec9bd7b3e52386828e267f99&region=US',
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({moviesUpcoming: responseJson});
      })
      .catch((error) => {
        console.log('Data fetching failed');
      });
  }

  render() {
    const {moviesTrending, moviesUpcoming} = this.state;
    return (
      <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 18,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 25}}>Trending Now</Text>
              <TouchableOpacity>
                <Text style={{color: '#193366', fontSize: 18, marginEnd: 15}}>
                  See All{'>'}
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              horizontal={true}
              data={moviesTrending.results}
              renderItem={({item}) => <TrendingMovie item={item} />}
              keyExtractor={(item, key) => key.toString()}
              showsHorizontalScrollIndicator={false}></FlatList>
          </View>
          {/* New view for upcoming movies */}
          <View style={{flex: 1, paddingTop: 35}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 18,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 25}}>Upcoming</Text>

              <TouchableOpacity>
                <Text style={{color: '#193366', fontSize: 18, marginEnd: 15}}>
                  See All{'>'}
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              horizontal={true}
              data={moviesUpcoming.results}
              renderItem={({item}) => <UpcomingMovie item={item} />}
              keyExtractor={(item, key) => key.toString()}
              showsHorizontalScrollIndicator={false}></FlatList>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 10,
  },
});
