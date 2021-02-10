import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Home() {
  return (
    <View style={styles.ViewStyle}>
      <Text>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
  },
});
