import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBhBj_86WnzeC3bcC3FXeWZNgkjDIyDMLA",
  authDomain: "vue-blog-system-b0b23.firebaseapp.com",
  projectId: "vue-blog-system-b0b23",
  storageBucket: "vue-blog-system-b0b23.appspot.com",
  messagingSenderId: "1059829786144",
  appId: "1:1059829786144:web:3dff4b66b156117b833e45",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
