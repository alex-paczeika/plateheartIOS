import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ImageBackground } from "react-native"
import Btn from "../components/Btn"
import TextBox from "../components/TextBox"
import firebase from 'firebase/app';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center"
    }
})


// console.log("sorinba", firebase.auth().currentUser.email);

const About = ({ navigation }) => {





    return (
        <View style={styles.container} >
            <ImageBackground source={require('./aboutBackground.png')} resizeMode="cover" style={styles.backgroundImage}>


                <Text style={{ fontSize: 34, fontWeight: "200", marginBottom: 650, marginLeft: 50, color: 'white' }}>Welcome to Plateheart</Text>
                <Btn title="Join now" onClick={() => navigation.navigate("Add")} />
                <Btn title="Log Out" onClick={() => firebase.auth().signOut()} />
            </ImageBackground>
        </View>
    )
}

export default About
