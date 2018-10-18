const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const expressGraphQl=require('express-graphql');
const {schema,rootResolver}=require('./graphqlSetup.js');
const {addupdateDatainFirebase,getAllDatabaseElement,deleteDatabseUser}=require('./operation.js');

var app=express();

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.append('Access-Control-Allow-Headers', '*');
  res.append('Access-Control-Allow-Credentials', 'true');
  next();
});

app.enable('trust proxy');
app.disable('x-powered-by');

app.set('json spaces', 2);
app.use(cors());
app.use(bodyParser.json());

app.use('/graphql',expressGraphQl({
       rootValue:rootResolver,
       schema:schema,
       graphiql:true
}));

app.listen(5001,()=>{console.log("server is running on port no: 5001/graphql")});