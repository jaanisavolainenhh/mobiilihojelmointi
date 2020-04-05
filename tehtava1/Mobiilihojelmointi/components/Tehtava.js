import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Tehtava() {
    const [text1, setText1] = React.useState("0");
    const [text2, setText2] = React.useState("0");
    const [loppusumma, setLoppusumma] = React.useState('0');

    function addaa() {
        setLoppusumma(parseInt(text1) + parseInt(text2));
    }

    function vahenna() {
        setLoppusumma(parseInt(text1) - parseInt(text2));
    }
    return (



        <View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text>Result: {loppusumma}</Text>
                <TextInput keyboardType={'numeric'} style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={text1 => setText1(text1)} value={text1} />
                <TextInput keyboardType={'numeric'} style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={text2 => setText2(text2)} value={text2} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-around', paddingTop: 20 }}>
                <Button title="+" onPress={addaa} />
                <Button title="-" onPress={vahenna} />
            </View>
        </View>


    );

}