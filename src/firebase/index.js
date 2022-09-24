import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyCrJnldVNdlcjMcMk0Cis9CFs7Q8ktgWko",
  authDomain: "django-demo-8f192.firebaseapp.com",
  projectId: "django-demo-8f192",
  storageBucket: "django-demo-8f192.appspot.com",
  messagingSenderId: "321257679804",
  appId: "1:321257679804:web:380364fa37c61a5ee099b9",
};

firebase.initializeApp(config);
var auth = firebase.auth();
var storage = firebase.storage();
var db = firebase.firestore();

export { db, auth, storage };
