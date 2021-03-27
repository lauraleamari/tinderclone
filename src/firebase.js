import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBcEmJzxw-ehTuWl810BIwQdCDKTwoMfbc",
    authDomain: "tinder-clone-87c6e.firebaseapp.com",
    projectId: "tinder-clone-87c6e",
    storageBucket: "tinder-clone-87c6e.appspot.com",
    messagingSenderId: "299239972011",
    appId: "1:299239972011:web:55683f72aa345638c86bee",
    measurementId: "G-CYTREK84J4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore();

export default database;