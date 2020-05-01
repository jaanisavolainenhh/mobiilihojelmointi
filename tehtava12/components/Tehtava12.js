import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('ostoslista.db');

export default function Tehtava() {
    const [text1, setText1] = React.useState("");
    const [amount, setAmount] = React.useState("");

    const [lista, setLista] = React.useState([]);


    function lisaa() {
        setLista([...lista, text1])
    }

    function clearaa() {
        setLista([]);
    }

    React.useEffect(() => {

        db.transaction(tx => {
            tx.executeSql('create table if not exists ostoslista (id integer primary key not null, tavara text, maara text);');
        });
        updateList();
    }, []);

    const saveItem = () => {
        db.transaction(tx => {
            tx.executeSql('insert into ostoslista (tavara, maara) values (?, ?);', [text1, amount]);
        }, null, updateList
        )
    }

    const updateList = () => {
        db.transaction(tx => {
            tx.executeSql('select * from ostoslista;', [], (_, { rows }) =>
                setLista(rows._array)
            );
        });
    }

    // Delete course
    const deleteItem = (id) => {
        db.transaction(
            tx => {
                tx.executeSql(`delete from ostoslista where id = ?;`, [id]);
            }, null, updateList
        )
    }

    const listSeparator = () => {
        return (
            <View
                style={{
                    height: 5,
                    width: "80%",
                    backgroundColor: "#fff",
                    marginLeft: "10%"
                }}
            />
        );
    };


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
                        <TextInput placeholder="Product" style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={text1 => setText1(text1)} value={text1} />
                        <TextInput placeholder="Amount" style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={amount => setAmount(amount)} value={amount} />

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center', padding: 20 }}>
                        <Button title="ADD" onPress={saveItem} />
                        <Button title="Clear" onPress={clearaa} />

                    </View>
                    <Text style={{ color: 'blue', fontWeight: 'bold', textAlign: 'center' }}>Shopping List</Text>
                    <View style={{ alignItems: 'center' }}>

                        <FlatList
                            ItemSeparatorComponent={listSeparator}
                            data={lista}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>
                                <View style={styles.listcontainer}>
                                    <Text>{item.tavara}, {item.maara}</Text>
                                    <Text style={{ color: 'blue' }} onPress={() => deleteItem(item.id)}> bought</Text>
                                </View>
                            } />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}></View>

        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listcontainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
});