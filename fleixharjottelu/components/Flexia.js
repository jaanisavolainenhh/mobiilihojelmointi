import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Flexia() {
  return (
    // Try setting `flexDirection` to `column`.
    <View style={{ flex: 1 }}>
      <View style={{
        flex: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',
        backgroundColor: '#D1D1D1'
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
      <View style={{
        flex: 1, flexDirection: 'row', backgroundColor : 'gray'
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>

      <View style={{
        flex: 1, flexDirection: 'row', backgroundColor : 'black', 
        alignItems:'flex-end',
        justifyContent:'center'
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>


      
      <View style={{
        flex: 1, flexDirection: 'column', backgroundColor : '#F5F5F5', 
        alignItems:'stretch',
        justifyContent:'center',
        flexWrap: 'nowrap',
        alignContent: 'stretch'
      }}>
        {/* koska täs ei oo widthiä niiin alignitems stretchaa */}
        <View style={{ height: 50, backgroundColor: 'powderblue' }} /> 
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue', alignSelf: 'flex-end' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
    </View>

    
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});