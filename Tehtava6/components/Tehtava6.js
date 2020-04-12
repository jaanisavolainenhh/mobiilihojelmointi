import React from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { AsyncStorage } from 'react-native';

export default function Tehtava() {

    const [text1, setText1] = React.useState("0");
    const [loppusumma, setLoppusumma] = React.useState('Guess a number between 1-100');
    const [arvattavaNumero, setArvattavaNumero] = React.useState(uusinumero);
    const [arvauskerrat, setArvauskerrat] = React.useState(1);
    const [highscore, setHighscore] = React.useState(-1);

    function uusinumero() {
        return Math.floor(Math.random() * 100) + 1;
    }

    const readHighscoresaato = async (curScore) => {
        try {
            console.log(curScore);
            //let value =  AsyncStorage.getItem('highscore');
           let value =  AsyncStorage.getItem('highscore').then((value) => {
                console.log("Logitus " + value );
                console.log(  "Lengthi " +             AsyncStorage.getAllKeys.getItem[0]
                    )
                if(parseInt(value) == null || value < curScore)
                {
                    saveHighscore(curScore);
                    console.log("New highscore");
                }
            })
            .then(res => {
                //do something else
            });
        } catch (error) {
            Alert.alert('Error reading data');
        } 
    }

    const readHighscore = async () => {
        try {
           let value =  AsyncStorage.getItem('highscore');
        } catch (error) {
            Alert.alert('Error reading data');
        } 
    }

    function DebuggaaAsynccia()
    {
        let value =  AsyncStorage.getItem('highscore').then((value) => {
            console.log("Logitus " + value );
         //   console.log(  "Lengthi " +             AsyncStorage.getAllKeys.getItem[0])
        })
    }

    const saveHighscore = async (newScore) => {
        try {
            await AsyncStorage.setItem('highscore', JSON.stringify(newScore));
        } catch (error) {
            Alert.alert('Error saving data');
        }
        setHighscore(arvauskerrat);
    }



    function RenderHighScore()
    {
        if(parseInt(highscore) < 0 )
        {
         return null;
         }

        return (
            <View>
                 <Text> 
                    Highscore: {highscore}
                 </Text> 
            </View>
        )
    }

    function arvaa() {
        if (parseInt(text1) === arvattavaNumero) {
            Alert.alert("You gues the number in " + arvauskerrat + " guesses");
            if(arvauskerrat<highscore || parseInt(highscore) < 0)
            {
                setHighscore(arvauskerrat);
                saveHighscore(arvauskerrat);
            }
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
                {/* <Button title="Printtaa storage" onPress={DebuggaaAsynccia} /> */}
            </View>

                <RenderHighScore />

        </View>


    );

}