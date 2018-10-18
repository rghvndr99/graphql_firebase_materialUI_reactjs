 const firebase=require('firebase');
   var config = {
             //enter firebase app credential
  };
  firebase.initializeApp(config);
 const db=firebase.database();
 exports.db=db;