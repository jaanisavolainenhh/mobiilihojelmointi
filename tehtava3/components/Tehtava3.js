import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function Tehtava() {
    const [text1, setText1] = React.useState("0");
    const [text2, setText2] = React.useState("0");
    const [loppusumma, setLoppusumma] = React.useState('0');
    const [historia, setHistoria] = React.useState([]);

    function addaa() {
        setLoppusumma(parseInt(text1) + parseInt(text2));
        logitus("+", parseInt(text1) + parseInt(text2));
    }

    function vahenna() {
        setLoppusumma(parseInt(text1) - parseInt(text2));
        logitus("-", parseInt(text1) - parseInt(text2));
    }

    function logitus(parami, tanbresult) {
        var tempvar = text1 + parami + text2 + "=" + tanbresult;
        setHistoria([...historia, tempvar ])

    }
    return (



        <View styles={{
            flex: 3,
            justifyContent: '',
            alignItems: 'space-between',
        }}>

            {/* <View styles={{ flex: 1 }}><Text></Text></View> */}
            <View styles={{ flex: 1 }}>

                <View styles={{ flex: 1 }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 50 }}>
                        <Text style={{ alignSelf: 'center' }}>Result: {loppusumma}</Text>
                        <TextInput keyboardType={'numeric'} style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={text1 => setText1(text1)} value={text1} />
                        <TextInput keyboardType={'numeric'} style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={text2 => setText2(text2)} value={text2} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center', padding: 20 }}>
                        <Button title="+" onPress={addaa} />
                        <Text>     </Text>
                        <Button title="-" onPress={vahenna} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                    <Text>History</Text>
                    <FlatList
                            data={historia}
                            keyExtractor={(item, index) => {
                                return item.index;
                            }}
                            renderItem={({ item }) =>
                                    <Text>{item} </Text>
                            } />

                    </View>
                </View>
            </View>
            {/* <View styles={{ flex: 1 }}><Text></Text></View> */}
        </View>

    );

}