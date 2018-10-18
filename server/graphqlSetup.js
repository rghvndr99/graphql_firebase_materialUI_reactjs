var {buildSchema}=require('graphql');
const {addupdateDatainFirebase,getAllDatabaseElement,deleteDatabseUser}=require('./operation.js');

 const schema=buildSchema(`
	 type Query{
	 	alluser:[user]
	 	updateuser(_id:String!,name:String,email:String,address:String,company:String):[user]
	 	deleteuser(_id:String!):[user]
	 	adduser(name:String!,email:String,address:String,company:String):[user]
	 },
	 type user{
	 	_id:String,
	 	age:Int,
	 	name:String,
	 	gender:String,
	 	company:String,
	 	email:String,
	 	address:String
	 }

	`);
 const rootResolver={
	alluser:()=>getAllDatabaseElement(),
	updateuser:(obj)=>addupdateDatainFirebase(obj),
	deleteuser:(obj)=>deleteDatabseUser(obj),
	adduser:(obj)=>addupdateDatainFirebase(obj),
}
exports.schema=schema;
exports.rootResolver=rootResolver;