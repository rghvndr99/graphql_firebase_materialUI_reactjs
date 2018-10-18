const {db} =require('./firebasesetup.js');
const {data}=require('./dummydata.js');
const tableName='users/';

 function addupdateDatainFirebase(obj){
  let _id=obj._id;
  db.ref(tableName + _id).set(obj);
 };
const getAllDatabaseElement=()=>{
     const response=db.ref(tableName).once('value').then(function(snapshot) {
         console.log('allData'+JSON.stringify(snapshot));
       });
};
 const deleteDatabseUser=(obj)=>{
	let _id=obj._id;
	const response= db.ref(tableName).child(_id).remove().then(function(_id){
       return _id;
	});
	return response;
}
 const addNewUser=(obj)=>{
      obj=cleanJson(obj);
      obj._id=getRandomId();
      data.push(obj);
      //addupdateDatainFirebase(obj);
      return data;
}
 const getRandomId=()=>{
	 let length=24;
      return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}
 const getAllUsers =()=>{
        //console.log('RDX');
	    //getAllDatabaseElement();
        return data
     };


const cleanJson=(obj)=>{
    let updatedObj={};
    for(let key in obj){
       key=key.trim();
       updatedObj[key]=obj[key].trim();
    }
    return updatedObj;
  };

 const getupdatedUser=(obj)=>{
	//write custom database logic
     obj=cleanJson(obj);
     data.map((item)=>{
	 	if(item._id==obj._id){
      console.log('item'+JSON.stringify(item));
           for(let key in obj) {
           	  item[key]=obj[key];
             }
         }
        return item;
	});
	return data;
}
 const getDeleteUser=(obj)=>{
	//write custom database logic

	obj=cleanJson(obj);
	let activeIndex=null;
	data.map((item,index)=>{
	 	if(item._id==obj._id){
           activeIndex=index;
         }
	});
	data.splice(activeIndex,1);
	//deleteDatabseUser(obj);
		return data;
}

exports.getDeleteUser=getDeleteUser;
exports.getupdatedUser=getupdatedUser;
exports.getAllUsers=getAllUsers;
exports.addNewUser=addNewUser;