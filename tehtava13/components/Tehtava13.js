import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Input, Button, Header, ListItem } from 'react-native-elements';


const db = SQLite.openDatabase('ostoslista.db');

export default function Tehtava() {
    const [text1, setText1] = React.useState("Kakka");
    const [amount, setAmount] = React.useState("Pieru");

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
            tx.executeSql('create table if not exists ostoslista (id integer primary key not null, tavara text, maara text);');
        });
        updateList();
    }, []);

    React.useEffect(() => {
        if (text1 == '' || amount == '') {
          setDisable(true);
        } else {
          setDisable(false);
        }
      }, [text1, amount]);

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

    //     <View style={styles.listcontainer}>
    //     <Text>{item.tavara}, {item.maara}</Text>
    //     <Text style={{ color: 'blue' }} onPress={() => deleteItem(item.id)}> bought</Text>
    // </View>

    const renderItem2 = ({ item }) => (
        <ListItem
            title={item.tavara}
            subtitle={item.maara}
            rightSubtitle={<Text onPress={() => deleteItem(item.id)}>bought</Text>}
            bottomDivider
            chevron
        />

    )


    return (

        <View style={{}}>

            <Header
                containerStyle={{ height: 40, alignContent: 'flex-start' }}
                // leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Hieno lista', style: { color: '#fff' } }}
            //rightComponent={{ icon: 'home', color: '#fff' }}
            />

            <View style={{}}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Input placeholder="Product" label="Product" onChangeText={text1 => setText1(text1)} value={text1} />
                    <Input placeholder="Amount" label="Amount" style={{ borderColor: 'gray', borderWidth: 1 }} onChangeText={amount => setAmount(amount)} value={amount} />
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