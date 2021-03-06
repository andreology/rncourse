//Andre Barajas
//React Native App Practice 
//Summer 2019
import React, { Component } from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';

class PickImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Text>Image Preview</Text>
                </View>
                <View style={styles.button}>
                    <Button title="Pick Image" onPress={() => alert('Pick Image')} />
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
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    }
});

export default PickImage;