import React, { Component } from "react";
import {getUser,updateUser,deleteUser,addUser} from "./services.js";
import ListUser from "./ListUser.js";
import UpdateUser from "./UpdateUser.js";
import Header from "./Header.js";
import './app.css';
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

class Main extends Component {
    constructor(props){
        super(props);
      this.state={
        userList:[],
        userObj:{},
        isadduser:false
      }
      this.undateUser=this.undateUser.bind(this);
      this.submitHandler=this.submitHandler.bind(this);
      this.closeModelBox=this.closeModelBox.bind(this);
      this.deleteUserHandler=this.deleteUserHandler.bind(this);
      this.addUserHandler=this.addUserHandler.bind(this);
      this.adduserBtnClick=this.adduserBtnClick.bind(this);
      this.adduserProps={
            name:'',
             email:'',
             address:'',
             company:''
         }

      }
  // loading user list
 componentDidMount(){
      getUser().then((userList)=>{
             this.setState({
              userList
         });
      });
  };
  // updating user
 submitHandler(obj){
      updateUser(obj).then((userList)=>{
      this.setState({
        userList,
        userObj:{},
        isadduser:false
      });
      });
  };
  //deleting user
 deleteUserHandler(obj){
    deleteUser(obj).then((userList)=>{
      this.setState({
        userList
      });
      });
  }
addUserHandler(obj){
addUser(obj).then((userList)=>{
    this.setState({
     userList,
     userObj:{},
     isadduser:false
    });
   });
  }
  //add button click
  adduserBtnClick (){
    this.setState({
       isadduser:true,
       userObj:this.adduserProps
     });
  }

  undateUser(userObj){
        this.setState({userObj});
  };
  closeModelBox(){
    this.setState({
        userObj:{},
        isadduser:false
      })
  };

  render() {
    const {userObj,userList,isadduser}=this.state;
    const isUpdated=Object.keys(userObj).length>0?true:false;
    let modalDialog=null;
    if(isUpdated || isadduser){
      modalDialog= <UpdateUser
                     isadduser={isadduser}
                     userObj={userObj}
                     isOpen={isUpdated}
                     closeModal={this.closeModelBox}
                     updateaction={this.submitHandler}
                     addaction={this.addUserHandler}
                     />
    }
    const userdatamap=userList?userList:[];
    const listOfUser=userdatamap.map((item)=><ListUser deleteUserHandler={this.deleteUserHandler} updateUserHandler={this.undateUser} key={item._id} item={item}/>)
     return(
          <div>
            <Header/>
            {listOfUser}
            {modalDialog}
            <Button variant="fab" color="secondary" aria-label="Add" className="add-user-btn" onClick={this.adduserBtnClick}>
                <AddIcon />
           </Button>
         </div>
    )
  }
}
export default Main;