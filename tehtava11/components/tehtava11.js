import React from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList, TimePickerAndroid, Image, Picker } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';


export default function Tehtava() {

    const [osoite, setOsoite] = React.useState('');
    const [koordinaatit, setKoordinaatit] = React.useState({ lat: 0, lng: 0 });
    const [initLocation, setInitLocation] = React.useState({ lat: 0, lng: 0 });

    const textChange = (event) => {
        setOsoite(event)
    }

    React.useEffect(() => {

        getLocation();

    }, [])


    const getLocation = async () => {
        //Check permission
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('No permission to access location');
        }
        else {
            console.log("await")
            let location = await Location.getCurrentPositionAsync({});
            console.log(location.coords.latitude)
            setKoordinaatit({lat: location.coords.latitude  , lng: location.coords.longitude });
            setInitLocation({lat: location.coords.latitude  , lng: location.coords.longitude });

            //setLocat(location);
        }
    };


    const etsiOsoite = () => {
        const url = 'http://open.mapquestapi.com/geocoding/v1/address?key=WztYTo5dT0RIuAQEPAoD1hDrLaEupxmp&location=' + osoite

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
                setKoordinaatit({ lat: data.results[0].locations[0].latLng.lat, lng: data.results[0].locations[0].latLng.lng })
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
                    top: 0, left: 0, right: 0, bottom: 70,
                }}
                initialRegion={{
                    latitude: initLocation.lat,
                    longitude: initLocation.lng,
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
                <TextInput onChangeText={textChange} value={osoite} />
                <Button
                    onPress={etsiOsoite}
                    title="Show"
                    //color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
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
