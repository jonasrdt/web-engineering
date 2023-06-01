import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDI0ueTZKqXO1FE0rUeAwcNlUu51wgwgA0",
    authDomain: "fawifhkiel.firebaseapp.com",
    projectId: "fawifhkiel",
    storageBucket: "fawifhkiel.appspot.com",
    messagingSenderId: "424898989050",
    appId: "1:424898989050:web:c78790b66b388f3e88b243"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
