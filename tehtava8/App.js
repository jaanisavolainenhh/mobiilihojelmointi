import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tehtava from './components/tehtava8'
export default function App() {
  return (
    <Tehtava />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
