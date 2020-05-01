import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Kartta from './components/tehtava14Kartta'
import Luettelo from './components/tehtava14Luettelo'
export default function App() {

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Luettelo" component={Luettelo} />
        <Stack.Screen name="Kartta" component={Kartta} />
      </Stack.Navigator>
    </NavigationContainer>
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
