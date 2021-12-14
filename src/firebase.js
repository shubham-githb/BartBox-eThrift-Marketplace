  
  import firebase from "firebase/app";
  import "firebase/auth";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCy4MSq9mkqsO5ByrrKL_lwMkKoR8mZPkk",
    authDomain: "bartthrift-a56f2.firebaseapp.com",
    projectId: "bartthrift-a56f2",
    storageBucket: "bartthrift-a56f2.appspot.com",
    messagingSenderId: "221961293426",
    appId: "1:221961293426:web:bc4ebd547d361551fabceb"
  };

// Initialize Firebase
 if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();