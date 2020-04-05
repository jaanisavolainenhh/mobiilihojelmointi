import React from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native';
export default function Tehtava2() {

    const [text1, setText1] = React.useState("0");
    const [loppusumma, setLoppusumma] = React.useState('Guess a number between 1-100');
    const [arvattavaNumero, setArvattavaNumero] = React.useState(uusinumero);
    const [arvauskerrat, setArvauskerrat] = React.useState(1);


    function uusinumero() {
        return Math.floor(Math.random() * 100) + 1;

    }

    function arvaa() {


        console.log(arvauskerrat);
        if (parseInt(text1) === arvattavaNumero) {
            Alert.alert("You gues the number in " + arvauskerrat + " guesses");
            setArvattavaNumero(uusinumero());
            setArvauskerrat(1);
            return;
        }
        else {

            if (parseInt(text1) > arvattavaNumero) {
                setLoppusumma("Your guess " + text1 + " is too high");
            }
            else {
                setLoppusumma("Your guess " + text1 + " is too low");
            }
        }

        setArvauskerrat(parseInt(arvauskerrat) + 1);
    }

    return (

        <View style={{
            flex: 1, backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        }}>


            <View>
                <Text>{loppusumma}</Text>

                {/* <Text>{loppusumma} // {arvattavaNumero} || {arvauskerrat}</Text> */}
            </View>
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
                <TextInput keyboardType={'numeric'} style={{ width: 70, borderColor: 'gray', borderWidth: 1 }} onChangeText={text1 => setText1(text1)} value={text1} />
            </View>
            <View>
                <Button title="Make Guess" onPress={arvaa} />
            </View>


        </View>


    );

}