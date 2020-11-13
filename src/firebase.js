import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8KNbtyWu-Xqkaz3ZuQOOUP7nL-jo1SXM",
  authDomain: "whatsapp-d3cf6.firebaseapp.com",
  databaseURL: "https://whatsapp-d3cf6.firebaseio.com",
  projectId: "whatsapp-d3cf6",
  storageBucket: "whatsapp-d3cf6.appspot.com",
  messagingSenderId: "169007254408",
  appId: "1:169007254408:web:6ba3f5d216cb626c34483d",
  measurementId: "G-7XHVJW0QFB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const Google__provider = new firebase.auth.GoogleAuthProvider();

export { auth, Google__provider };
export default db;
