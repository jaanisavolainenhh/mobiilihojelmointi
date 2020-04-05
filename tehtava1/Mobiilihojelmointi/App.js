import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Flexipaska from './components/Flexipaska';
import Tehtava from './components/Tehtava'


export default function App() {


  return (

    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Tehtava />
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
