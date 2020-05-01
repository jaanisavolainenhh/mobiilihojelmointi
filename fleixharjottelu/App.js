import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Flexia from './components/Flexia'
import Flexia2 from './components/Flexia2'

export default function App() {
  return (
    <View style={styles.container}>
      <Flexia2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
