 const firebase=require('firebase');
   var config = {
    apiKey: "AIzaSyBPIMdXPKEHfy_C8u19rLGqTDQjFJ-XHhU",
    authDomain: "graphql-e4d94.firebaseapp.com",
    databaseURL: "https://graphql-e4d94.firebaseio.com",
    projectId: "graphql-e4d94",
    storageBucket: "",
    messagingSenderId: "457473126884"
  };
  firebase.initializeApp(config);
 const db=firebase.database();
 exports.db=db;