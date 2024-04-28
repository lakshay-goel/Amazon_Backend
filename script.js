// const express = require('express');
// const productRouter = require('./routers/productRouter.js');

// const app = express();
// app.use('/api/products',productRouter);


// app.listen(8080);


// sequal 
//diferrence between sequal and non sequal

//**************************************************************************** */

const express=require("express");
const productsRouter=require('./routers/productRouter.js');
const app=express();
const test=require('./model/productsModel.js');
const mongoose=require('mongoose');

app.use(express.json());
app.use('/api/products',productsRouter);

const url="mongodb+srv://$USERNAME$:$PASSWORD$@cluster0.ndnw70a.mongodb.net/$DB_Name$?retryWrites=true&w=majority&appName=Cluster0"
const databaseUser='apoorva2325mca1136';
const databasePassword='apoorva';
const databaseName='Amazon-Backend';

let dblink=url.replace("$USERNAME$",databaseUser);
 dblink=dblink.replace("$PASSWORD$",databasePassword);
 dblink=dblink.replace("$DB_Name$",databaseName); 
console.log(dblink);
 mongoose.connect(dblink)
  .then(() => console.log('<---------Databse Connected! ------->'));

app.listen(2500,()=>console.log('<-------------App Started------------->')
);

//MongoDB is a noSQL Database
// What is NoSql 
// SQL vs NoSql
