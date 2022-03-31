import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from "react-native"
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import { getStorage } from 'firebase/storage';
// import "firebase/auth";
import Home from './Home'

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",



    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    Holder: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 30,
    },
    notshow: {
        opacity: 0,
    },
    show: {
        backgroundColor: "white",

    }

})

export default function Loginscreen({ navigation }) {


    const [showResults, setShowResults] = React.useState(false);
    const [disable, setDisable] = React.useState(false);
    const onClick = () => {
        setShowResults(true)
        setDisable(true);
    }
    const [values, setValues] = useState({
        email: "",
        pwd: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function Login() {

        const { email, pwd } = values

        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(() => {
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    }



    return <View style={styles.view}>
        <Image source={require('./aboutBackground.png')} style={styles.backgroundImage} />



        <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>Login</Text>
        <TextBox placeholder="Email Address" style={styles.Holder} onChangeText={text => handleChange(text, "email")} />
        <TextBox placeholder="Password" style={styles.Holder} onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
            <Btn onClick={() => Login()} title="Login" style={{ width: "48%", color: 'black', backgroundColor: 'transparent ', borderColor: '#fff', border: 'none', color: 'red' }} />
            <Btn onClick={() => navigation.navigate("Sign Up")} title="Sign Up" style={{ width: "48%", backgroundColor: "black" }} />
        </View>



    </View >
}
