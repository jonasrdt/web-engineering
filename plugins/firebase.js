import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "yourfirebasecontenthere",
    authDomain: "yourfirebasecontenthere",
    projectId: "yourfirebasecontenthere",
    storageBucket: "yourfirebasecontenthere",
    messagingSenderId: "yourfirebasecontenthere",
    appId: "yourfirebasecontenthere"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()