import React from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList, TimePickerAndroid , Image} from 'react-native';

export default function Tehtava() {

    const [userInput, setUserinput] = React.useState('onions');
    const [reseptit, setReseptit] = React.useState([]);
    const [lista, setLista] = React.useState(["helvetti", "saatana"]);

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
        const url = 'http://www.recipepuppy.com/api/?i=' + userInput;
        //http://www.recipepuppy.com/api/?i=onions
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
                setReseptit(data.results);
            })
            .catch((error) => {
                Alert.alert('Error', error);
            });

        console.log(reseptit);
    }




    return (
        <View>
            <TextInput
                style={{ fontSize: 18, paddingTop:50,paddingBottom:15, textAlign : "center" }}
                value={userInput}
                placeholder="Description"
                onChangeText={(userInput) => setUserinput(userInput)}
            />

            <Button title="Find" onPress={getJobs} />


            <FlatList
                data={reseptit}
                keyExtractor={(item, index) => {
                    return item.index;
                }}
                renderItem={({ item }) =>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri :  item.thumbnail
                            }}
                            />
      
                        <Text>{item.title} </Text>

                    </View>

                } />

        </View>

    );

}