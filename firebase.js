var firebaseConfig = {
  apiKey: "AIzaSyA8bHafv_LBU93JsKRUEUl5fxv2F1HufPw",
  authDomain: "clone-two-56e44.firebaseapp.com",
  projectId: "clone-two-56e44",
  storageBucket: "clone-two-56e44.appspot.com",
  messagingSenderId: "686014876175",
  appId: "1:686014876175:web:6f44629761226fc402f17a",
  measurementId: "G-30074SF4CN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();