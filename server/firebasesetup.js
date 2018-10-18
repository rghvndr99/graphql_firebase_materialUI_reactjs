 const firebase=require('firebase');
   var config = {

  };
  firebase.initializeApp(config);
 const db=firebase.database();
 exports.db=db;