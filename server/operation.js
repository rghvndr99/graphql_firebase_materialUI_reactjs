const {db} =require('./firebasesetup.js');
const tableName='users/';

 const addupdateDatainFirebase=async(obj)=>{
  obj=cleanJson(obj);
  if(!obj._id){
   obj._id=getRandomId();
 }
  let _id=obj._id;
  let response=await db.ref(tableName + _id).set(obj).then(()=>{
      return  getAllDatabaseElement();
  })
  return await response;
 };

const getAllDatabaseElement=async()=>{
     let usersData=[];
     const response=await db.ref(tableName).once('value').then(function(snapshot) {
           let dataObj=snapshot.val();
           for(let key in dataObj){
             usersData.push(dataObj[key]);
           }
           return usersData;
       });
     return await response;
};

 const deleteDatabseUser=async(obj)=>{
  obj=cleanJson(obj);
	let _id=obj._id;
	const response= await db.ref(tableName).child(_id).remove().then(function(){
       return getAllDatabaseElement();
	});
  return await response;
}

 const getRandomId=()=>{
	 let length=24;
      return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

const cleanJson=(obj)=>{
    let updatedObj={};
    for(let key in obj){
       key=key.trim();
       updatedObj[key]=obj[key].trim();
    }
    return updatedObj;
  };

exports.deleteDatabseUser=deleteDatabseUser;
exports.addupdateDatainFirebase=addupdateDatainFirebase;
exports.getAllDatabaseElement=getAllDatabaseElement;