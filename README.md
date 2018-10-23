# graphql_with_nodejs and firebase
The context of this page is to demonstrate the integration of graphql with firebase and nodejs. It will include some basic concepts/keyword and its description whenever is required. 

 1. Dependency:

    To start with graphql, following dependency needs to be installed.  

![dependency](https://github.com/rghvndr99/repo-code-snippet/blob/master/graphql_firebase_materialUI_reactjs/dependency.PNG)

2. add firebase in app
   To add firebase in app, following steps/code needs to be done.
   ![firebase setup](https://github.com/rghvndr99/repo-code-snippet/blob/master/graphql_firebase_materialUI_reactjs/firebasesetup.PNG)
   * include dependency using **require ("firebase")**.
   * config obj
     this object will be provided by firebase while creating the database.
     
   * Create database instance. (**firebase.database()**) It will be available across the app.
 

 1. Add graphql with nodejs:

    ![configuration](https://github.com/rghvndr99/repo-code-snippet/blob/master/graphql_firebase_materialUI_reactjs/configuration.PNG)

   First, the endpoint is decided that is http://localhost:portNo/graphql.  While network request, we use the same endpoint in the front end.

   Now for above endpoint,expressGraphql get executed with the following parameter.

  *  rootValue

     It is a JSON object contains the mapping of API names and corresponding action/function that should be get executed.

   ![resolver](https://github.com/rghvndr99/repo-code-snippet/blob/master/graphql_firebase_materialUI_reactjs/resolver.PNG)

   * schema  
     It is a structure that defines input and expected output format. 
   ![schema img](https://github.com/rghvndr99/repo-code-snippet/blob/master/graphql_firebase_materialUI_reactjs/schema.PNG)

 

As an image, we can define a type user which has certain properties and its type. Now as an example, if the request is to delete a user (deleteuser), then the input will be _id of type string and is mandatory (! symbol is for the required field). Now the output of this function will be an array of objects having all the props of the user. 

 

Note: Please check (Mutations and Input Types | GraphQL.js Tutorial ) for more info about type, Input, query, and mutation.

*  grapghiql

    it is used to access graphql through its user interface. If http://localhost:portNo/graphql has been hit, it will open a UI as shown below. Here real time query can be tested.

![graphqlUI](https://github.com/rghvndr99/repo-code-snippet/blob/master/graphql_firebase_materialUI_reactjs/graphql-UI.PNG)

1.  How it works

   To demonstrate functionality, we will take an example of updateuser function.

   * Front-end side:  
     step1: URL for network request. (http://localhostportNo/graphql)  
   ![url](https://github.com/rghvndr99/repo-code-snippet/blob/master/graphql_firebase_materialUI_reactjs/URL.PNG)   
    Step2: make the network request.  
![update user](https://github.com/rghvndr99/repo-code-snippet/blob/master/graphql_firebase_materialUI_reactjs/updateuser-UI.PNG)  

     *  Server side:  
      Step1: http://localhostportNo/graphql will receive a post request with the query as updateuser  
      Step2: resolver will execute the corresponding function that is getUpdatedUser(obj).  

      ![update user](https://github.com/rghvndr99/repo-code-snippet/blob/master/graphql_firebase_materialUI_reactjs/updateuser.PNG)  
  Step3: getUpdatedUser(obj) will return updated data which will be captured and rendered on the front end.

