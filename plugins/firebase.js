import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "enteryourdatafromfirebasehere",
    authDomain: "enteryourdatafromfirebasehere",
    projectId: "enteryourdatafromfirebasehere",
    storageBucket: "enteryourdatafromfirebasehere",
    messagingSenderId: "enteryourdatafromfirebasehere",
    appId: "enteryourdatafromfirebasehere"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
