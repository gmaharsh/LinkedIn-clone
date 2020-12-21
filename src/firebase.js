import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDsIj8dp5jq5WHiw5nQ2fFuyIm2xCtKnO0",
  authDomain: "linkedin-clone-7a628.firebaseapp.com",
  projectId: "linkedin-clone-7a628",
  storageBucket: "linkedin-clone-7a628.appspot.com",
  messagingSenderId: "149298475611",
  appId: "1:149298475611:web:6620b721d43391f1c5457e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };