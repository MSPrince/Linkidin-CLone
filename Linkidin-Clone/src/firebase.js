import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWN83B2sRkSK0YTGCG6GtMdhcyihzaAy0",
  authDomain: "linkidin-clone-a4451.firebaseapp.com",
  projectId: "linkidin-clone-a4451",
  storageBucket: "linkidin-clone-a4451.appspot.com",
  messagingSenderId: "979760411978",
  appId: "1:979760411978:web:1d8d139539ecc1b011fdb3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db};