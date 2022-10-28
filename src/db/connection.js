const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crud-operations-api").then(() =>{
    console.log("Connection is Successfull......");
}).catch((e) =>{
    console.log("No Connection", e);
})