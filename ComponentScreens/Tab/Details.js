import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import bgCover from '../../assets/bgimage.png';

export default function Details({route}) {
  const {title, overview, poster_path, date, popularity, vote} = route.params;

  return (
    <ImageBackground source={bgCover} style={{height: '100%', width: '100%'}}>
      <ScrollView style={styles.viewStyle}>
        <View style={{marginTop: 20}}>
          <Text style={styles.titleStyle}>{title}</Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                shadowOpacity: 200,
                shadowColor: 'black',
              }}>
              <Image
                style={styles.imageStyle}
                source={{
                  uri: 'https://image.tmdb.org/t/p/original/' + poster_path,
                }}
              />
            </View>
            <View style={{marginTop: 90}}>
              <Text style={styles.releaseDate}>Release Date:</Text>
              <Text style={{fontSize: 14}}>{date}</Text>
              <Text style={styles.popularity}>Popularity:</Text>
              <Text style={{fontSize: 14}}>{popularity}</Text>
              <Text style={styles.score}>Score:</Text>
              <Text style={{fontSize: 14}}>{vote}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            margin: 10,
          }}>
          <Text style={styles.overview}>Overview:</Text>
          <Text style={{fontSize: 18}}>{overview}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  imageStyle: {
    height: 400,
    width: 250,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
  },
  titleStyle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    shadowColor: 'black',
    shadowOpacity: 300,
    alignSelf: 'center',
  },
  overview: {
    fontSize: 25,
    color: '#000080',
    fontWeight: '500',
  },
  score: {
    marginTop: 30,
    fontSize: 17,
    fontWeight: '600',
  },
  popularity: {
    marginTop: 30,
    fontSize: 17,
    fontWeight: '600',
  },
  releaseDate: {
    fontSize: 17,
    fontWeight: '600',
  },
});
