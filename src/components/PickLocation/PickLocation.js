import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Dimensions } from 'react-native';
import MapView from "react-native-maps";

class PickLocation extends Component {
    state = {
        focusedLocation: {
            latitude: 33.7838235,
            longitude: -118.1162791,
            latitudeDelta: 0.0122,
            longitudeDelta:
                Dimensions.get("window").width /
                Dimensions.get("window").height *
                0.0122
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={this.state.focusedLocation}
                    style={styles.map}
                />
                <View style={styles.button}>
                    <Button title="Locate Me" onPress={() => alert('Pick Location')}/>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    map: {
        width: "100%",
        height: 250
    },
    button: {
        margin: 8
    }
});

export default PickLocation;