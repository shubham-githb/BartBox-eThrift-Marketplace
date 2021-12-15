import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCy4MSq9mkqsO5ByrrKL_lwMkKoR8mZPkk",
    authDomain: "bartthrift-a56f2.firebaseapp.com",
    projectId: "bartthrift-a56f2",
    storageBucket: "bartthrift-a56f2.appspot.com",
    messagingSenderId: "221961293426",
    appId: "1:221961293426:web:bc4ebd547d361551fabceb"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
