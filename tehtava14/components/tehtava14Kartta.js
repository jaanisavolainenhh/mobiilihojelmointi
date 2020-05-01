import React from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList, TimePickerAndroid, Image, Picker } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Kartta({route, navigation}) {

    const [koordinaatit, setKoordinaatit] = React.useState({lat: 60.2, lng: 25});
    const {sijainti} = route.params;


    React.useEffect(() => {

        etsiOsoite();

    }, [sijainti])

    const etsiOsoite = () => {
        const url = 'http://open.mapquestapi.com/geocoding/v1/address?key=WztYTo5dT0RIuAQEPAoD1hDrLaEupxmp&location=' + sijainti

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
                // console.log(data.results[0].locations)
                setKoordinaatit({lat: data.results[0].locations[0].latLng.lat, lng: data.results[0].locations[0].latLng.lng })
                // console.log(data.results[0].locations[0].latLng.lat)
                // console.log(data.results[0].locations[0].latLng.lng)
                // console.log(koordinaatit);
            })
            .catch((error) => {
                Alert.alert('Error', error);
            });


    }

    //{{ paddingTop: 50,paddingBottom: 10,  flex: 1, flexDirection: 'row', alignItems: 'center' }}
    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{
                    flex: 1,
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                }}
                initialRegion={{
                    latitude: koordinaatit.lat,
                    longitude: koordinaatit.lng,
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0221,
                }}
                
                region={{
                    latitude: koordinaatit.lat,
                    longitude: koordinaatit.lng,
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0221,
                }}
                >

                <Marker coordinate=
                    {{
                        latitude: koordinaatit.lat,
                        longitude: koordinaatit.lng,
                    }}
                    title='Haaga-Helia' />

            </MapView>
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                height: 180
                //backgroundColor: 'red',
            }}>

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

    },
});
