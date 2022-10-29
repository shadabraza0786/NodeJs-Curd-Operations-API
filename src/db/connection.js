const mongoose = require("mongoose");
var config = require('../../config/index');


mongoose.connect(config.database.uri || config.database.baseUrl ).then(() =>{
    console.log("Connection is Successfull......");
}).catch((error) =>{
    console.log("No Connection", error);
})





// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://shadabraza0786:mongodb%40123@cluster0.gmr4imx.mongodb.net/Crud-Operations-Api?retryWrites=true&w=majority").then(() =>{
//     console.log("Connection is Successfull......");
// }).catch((error) =>{
//     console.log("No Connection", error);
// })