import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Search() {
  return (
    <View style={styles.ViewStyle}>
      <Text>Search screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
  },
});
