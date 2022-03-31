
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/Login"
import HomeScreen from "./screens/Home"
import SignUpScreen from "./screens/SignUp"
import Add from './screens/Add';
import firebase from 'firebase/app';
import About from './screens/About';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyCHxJjb_PazDXXKMrgCZOjeSgBmMGwNd1k",
    authDomain: "plateheart-170b5.firebaseapp.com",
    databaseURL: "https://plateheart-170b5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "plateheart-170b5",
    storageBucket: "plateheart-170b5.appspot.com",
    messagingSenderId: "406068515284",
    appId: "1:406068515284:web:87ca6b187e248a1a95c641",
    measurementId: "G-Z3N5D5P2HN"
  };

  const Tab = createBottomTabNavigator();




  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });

  function HomeTabs() {
    return (
      <Tab.Navigator>

        <Tab.Screen name="Home" component={Home} />


      </Tab.Navigator>
    );
  }


  return (
    <NavigationContainer>
      {isLoggedIn ? (

        <Stack.Navigator>
          <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
          <Stack.Screen name="Hometabs" component={HomeTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Add" component={Add} />

        </Stack.Navigator>
      ) :
        <Stack.Navigator>

          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      }
    </NavigationContainer >
  );
}


export default App;
