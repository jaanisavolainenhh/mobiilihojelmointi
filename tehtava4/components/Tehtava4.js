import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function Tehtava() {
    const [text1, setText1] = React.useState("");
    const [lista, setLista] = React.useState([]);


    function lisaa() {
        setLista([...lista, text1])
    }

    function clearaa() {
        setLista([]);
    }


    return (
        <View style={{
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{ flex: 1 }}></View>

            <View style={{ flex: 1 }}>

                <View style={{}}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 50 }}>
                        <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={text1 => setText1(text1)} value={text1} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center', padding: 20 }}>
                        <Button title="ADD" onPress={lisaa} />
                        <Button title="Clear" onPress={clearaa} />

                    </View>
                    <Text style={{ color: 'blue', fontWeight: 'bold', textAlign: 'center' }}>Shopping List</Text>
                    <View style={{ alignItems: 'center' }}>
                        <FlatList
                            data={lista}
                            keyExtractor={(item, index) => {
                                return item.index;
                            }}
                            renderItem={({ item }) =>
                                    <Text>{item} </Text>
                            } />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}></View>

        </View>

    );

}