import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDMsdGvjH0Q9WFWhl2IB54eusgLf20r7oQ",
    authDomain: "clone-5f033.firebaseapp.com",
    projectId: "clone-5f033",
    storageBucket: "clone-5f033.appspot.com",
    messagingSenderId: "523618891698",
    appId: "1:523618891698:web:31d23f126b9cdd462056ab",
    measurementId: "G-MCVEPJ68XL"
  })

const db = firebase.firestore();

export { db }


