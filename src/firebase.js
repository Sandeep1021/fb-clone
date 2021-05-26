import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBTyTFKlz9xw3Vo_6tkY8ciE5Xdi48KP5E",
    authDomain: "facebook-clone-bd5de.firebaseapp.com",
    projectId: "facebook-clone-bd5de",
    storageBucket: "facebook-clone-bd5de.appspot.com",
    messagingSenderId: "747905682940",
    appId: "1:747905682940:web:bfdb2dd673c4226e713679",
    measurementId: "G-NNY2CZZ1FG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;