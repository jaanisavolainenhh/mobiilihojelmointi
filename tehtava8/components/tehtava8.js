import React from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList, TimePickerAndroid, Image, Picker } from 'react-native';


export default function Tehtava() {

    const [userInput, setUserinput] = React.useState(500);
    const [reseptit, setReseptit] = React.useState({
        "AED": 3.994333,
        "AFN": 82.871825,
        "ALL": 124.791041
    });
    const [selectedValue, setSelectedValue] = React.useState("AED");
    const [maara, setMaara] = React.useState("MON MILJOONA EUROA")

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
        },
        tinyLogo: {
            width: 50,
            height: 50,
        },
        logo: {
            width: 66,
            height: 58,
        },
    });



    const getJobs = () => {
        const url = 'http://data.fixer.io/api/latest?access_key=a1696cd4add2aab61b241265bfa515e5'

        console.log(url);
        fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'include', // include, *same-origin, omit
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }

        })
            //.then((response) => console.log(response))
            .then((response) => response.json())
            .then((data) => {
                setReseptit(data.rates);

            })
            .catch((error) => {
                Alert.alert('Error', error);
            });

        //console.log(reseptit);
    }

    function CreatePicker() {
        return (


            <Picker
                selectedValue={selectedValue}
                style={{ width: 100, alignContent: 'center' }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {
                    Object.keys(reseptit).map((valuutta) =>
                        <Picker.Item label={valuutta} value={valuutta} />
                    )
                }
            </Picker>



        )
    }

    React.useEffect(() => {
        getJobs();
    }, []);


    function laske() {
        // getJobs();
        //console.log(selectedValue)
        console.log(reseptit[selectedValue]);
        let temppi = ((parseInt(userInput) / reseptit[selectedValue])).toFixed(2);


        setMaara(temppi + " €")

    }

    //{{ paddingTop: 50,paddingBottom: 10,  flex: 1, flexDirection: 'row', alignItems: 'center' }}
    return (
        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>

            <Text style={{ fontSize: 18, paddingTop: 50, paddingBottom: 10, textAlign: "center" }}>{maara}</Text>


            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', paddingTop: 50, paddingBottom: 0 }}>

                <TextInput
                    style={{ height: 50, textAlign: 'right', paddingRight: 30 }}
                    value={userInput}
                    placeholder={userInput.toString()}
                    onChangeText={(userInput) => setUserinput(userInput)}
                    keyboardType={'numeric'}
                />
                <Text>|</Text>
                < CreatePicker />
            </View>

            <View style={{ paddingTop: 30, justifyContent: 'center' }}>
                <Button title="Convert" onPress={laske} />
            </View>
        </View>





    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});
