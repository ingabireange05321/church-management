var firebaseConfig = {
  apiKey: "AIzaSyBJKJUudUTohQdboP1FaWflUXmf9JZgszE",
  authDomain: "church-management-sys.firebaseapp.com",
  projectId: "church-management-sys",
  storageBucket: "church-management-sys.appspot.com",
  messagingSenderId: "202778104037",
  appId: "1:202778104037:web:763763460db0ed8529440c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

console.log(db);
