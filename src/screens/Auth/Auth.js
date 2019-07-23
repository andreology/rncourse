import React, { Component } from 'react';
import { View, Button, ImageBackground, StyleSheet } from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import startMainTabs from '../MainTabs/startMainTabs';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import headingText from '../../components/UI/HeadingText/HeadingText';
import backgroundImage from "../../assets/ground.png";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();

    }


    render() {
        return (
            <ImageBackground source={backgroundImage} style={backgroundImage}>
            <View style={styles.container}> 
                <MainText>
                <HeadingText> Please Log In </HeadingText> 
                </MainText>
                    <ButtonWithBackground
                        color="green"
                        onPress={() => alert("Hello")
                    }>Swith To Log In </ButtonWithBackground>
                <View style={styles.inputContainer}> 
                    <DefaultInput placeholder="Your Email Address" style={styles.input} /> 
                    <DefaultInput placeholder="Password" style={styles.input} /> 
                    <DefaultInput placeholder="Confirm Password" style={styles.input} /> 
                </View>
                    <ButtonWithBackground
                        color="green"
                        onPress={this.loginHandler}
                        >Submit </ButtonWithBackground>
                </View> 
            </ImageBackground>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    backgroundImage: {
        width: "100%", 
        flex: 1,

    }
});


export default AuthScreen;