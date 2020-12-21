import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB6gXyPd4Zof7a86Nng_Wd8-iHs5iuNFf8",
    authDomain: "whatsappclone-d2002.firebaseapp.com",
    projectId: "whatsappclone-d2002",
    storageBucket: "whatsappclone-d2002.appspot.com",
    messagingSenderId: "885306272914",
    appId: "1:885306272914:web:f7a35596ee337be48fca4b",
    measurementId: "G-R6MBHQ2HN3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); //for authentication purpose
const provider = new firebase.auth.GoogleAuthProvider(); //for google Auth...

export default db;
export {auth, provider};