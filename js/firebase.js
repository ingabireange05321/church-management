var firebaseConfig = {
  apiKey: "AIzaSyAa7eDjQPpJrpfz1QjMcK_LgVoBSxPQA2o",
  authDomain: "church-management-bd75d.firebaseapp.com",
  projectId: "church-management-bd75d",
  storageBucket: "church-management-bd75d.appspot.com",
  messagingSenderId: "927960629616",
  appId: "1:927960629616:web:c47fc6674a3282a3720fb5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

console.log(db);
