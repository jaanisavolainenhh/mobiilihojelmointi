import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer, BaseRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function Historia({route, navigation}) {
    const {historia} = route.params;




    return (

        <View style={{ alignItems: 'center' }}>
        <Text>History</Text>
        <FlatList
                data={historia}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                        <Text>{item} </Text>
                } />

        </View>

    );

}

