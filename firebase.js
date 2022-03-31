// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const auth = firebase.auth()


const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();

export const storage = firebase.storage().ref();

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// export { auth };