import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, Button, Alert, Image } from "react-native"
import { useFocusEffect } from '@react-navigation/native';
import { useForm, useController } from 'react-hook-form'
import Btn from "../components/Btn"
// import firebase from 'firebase/app';
import fireDb from '../firebase'
import { storage } from '../firebase';
import TextBox from "../components/TextBox"
import firebase from 'firebase/app';







const initialState = {
    email: '',
    name: '',
    plate: '',
    contact: '',
    profilePhoto: '',
    popularity: 0,
}



const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",



    },
    Holder: {

        height: 40,
        // margin: 22,
        borderWidth: 1,

        padding: 10,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 30,
    }
})




const Add = ({ navigation }) => {


    const [nameb, setName] = React.useState("");
    const [plateb, setPlate] = React.useState("");
    const [contactb, setContact] = React.useState("");
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});




    const [Img, setImg] = React.useState(null);

    const uploadImg = () => {

    }


    function uploadToFirebase() {
        if (!nameb || !plateb || !contactb) {
            Alert.alert("Please fill all the fields.")
        } else {

            fireDb.child(`plates`).push(state, (err) => {

                if (err) {
                    // toast.error(err);
                } else {
                    // routeChange();
                    console.log("a reusit");
                }
            })
        }
        console.log(state);
    }






    useFocusEffect(
        React.useCallback(() => {
            fireDb.child("plates").orderByChild("email").equalTo(firebase.auth().currentUser.email).on("value", (snapshot) => {
                const data = snapshot.val();
                setData(data);
            })
            console.log(data);
            if (data === null) {

            } else {
                Object.keys(data).map((id, index) => {
                    if (data[id].plate === 'null') {

                        console.log("e null");

                    } else {
                        console.log("e plin");

                        navigation.navigate("Hometabs")
                    }
                })
            }

        }, [data])
    );


    return (
        <View style={styles.view} >

            <TextBox style={styles.Holder} label="Email"
                value={nameb}
                onChangeText={nameb => {
                    setName(nameb); setState({
                        email: firebase.auth().currentUser.email,
                        name: nameb,
                        plate: plateb,
                        contact: contactb,
                        profilePhoto: '',
                        popularity: 0,

                    })
                }} />
            <TextBox style={styles.Holder} label="Email"
                value={plateb}
                onChangeText={plateb => {
                    setPlate(plateb);
                    setState({
                        email: firebase.auth().currentUser.email,
                        name: nameb,
                        plate: plateb,
                        contact: contactb,
                        profilePhoto: '',
                        popularity: 0,

                    })
                }} />
            <TextBox style={styles.Holder} label="Email"
                value={contactb}
                onChangeText={contactb => {
                    setContact(contactb);
                    setState({
                        email: firebase.auth().currentUser.email,
                        name: nameb,
                        plate: plateb,
                        contact: contactb,
                        profilePhoto: '',
                        popularity: 0,

                    })
                }} />
            <Image source={{ uri: Img }}

            ></Image>
            <Button mode="contained"
                onPress={uploadImg}>Upload Pic</Button>
            <Btn title="Join now" onClick={() => uploadToFirebase()} />
            {/* <Btn title="Submit" onPress={handleSsubmit()} /> */}

            {/* <Text>{props.sor}</Text> */}
            {/* {Object.keys(data).map((id, index) => {
                return (<>
                    <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>{data[id].plate}</Text>
                </>)
            })} */}
        </View>
    )
}


export default Add;




