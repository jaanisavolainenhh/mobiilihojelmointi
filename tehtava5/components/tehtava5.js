import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Historia from './tehtava5historia';
import Calculator from './tehtava5calculator';
import { createStackNavigator } from '@react-navigation/stack';

export default function Tehtava5() {

  
   // const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Calculator" component={Calculator} />
                <Stack.Screen name="Historia" component={Historia} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

