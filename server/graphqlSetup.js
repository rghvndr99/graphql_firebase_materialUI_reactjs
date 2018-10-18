var {buildSchema}=require('graphql');
const {getAllUsers,getupdatedUser,getDeleteUser,addNewUser}=require('./operation.js');

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
	alluser:()=>getAllUsers(),
	updateuser:(obj)=>getupdatedUser(obj),
	deleteuser:(obj)=>getDeleteUser(obj),
	adduser:(obj)=>addNewUser(obj),
}
exports.schema=schema;
exports.rootResolver=rootResolver;