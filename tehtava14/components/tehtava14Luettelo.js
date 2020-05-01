import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Input, Button, Header, ListItem } from 'react-native-elements';


const db = SQLite.openDatabase('ostoslista.db');

export default function Luettelo({navigation}) {
    //const {historia} = route.params;

    const [text1, setText1] = React.useState("");
    const [amount, setAmount] = React.useState("");

    const [lista, setLista] = React.useState([]);

    const [disable,setDisable] = React.useState(true);

    function lisaa() {
        setLista([...lista, text1])
    }

    function clearaa() {
        setLista([]);
    }

    React.useEffect(() => {

        db.transaction(tx => {
            tx.executeSql('create table if not exists ostoslista (id integer primary key not null, tavara text);');
        });
        updateList();
    }, []);

    React.useEffect(() => {
        if (text1 == '' ) {
          setDisable(true);
        } else {
          setDisable(false);
        }
      }, [text1]);

    const saveItem = () => {
        db.transaction(tx => {
            tx.executeSql('insert into ostoslista (tavara) values (?);', [text1]);
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



    const renderItem2 = ({ item }) => (
        <ListItem
            title={item.tavara}
            onLongPress={() => deleteItem(item.id)}
            //subtitle={item.maara}
            rightSubtitle={<Text onPress={() => navigation.navigate('Kartta', {sijainti : item.tavara})}>show on map</Text>}
            bottomDivider
            chevron
        />

    )


    return (

        <View style={{}}>



            <View style={{}}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Input placeholder="Place" label="Placefinder" onChangeText={text1 => setText1(text1)} value={text1} />
                </View>

                <Button type="solid"
                    title="Save" onPress={saveItem}
                    disabled = {disable}
                    containerStyle={{
                        //paddingBottom: 50 
                    }}
                />                

                <FlatList
                    data={lista}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem2}
                />

            </View>

        </View>


        // </View>

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