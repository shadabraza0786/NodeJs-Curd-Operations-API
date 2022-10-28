const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shadabraza0786:<mongodb@123>@cluster0.gmr4imx.mongodb.net/?retryWrites=true&w=majority").then(() =>{
    console.log("Connection is Successfull......");
}).catch((e) =>{
    console.log("No Connection", e);
})





// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/crud-operations-api").then(() =>{
//     console.log("Connection is Successfull......");
// }).catch((e) =>{
//     console.log("No Connection", e);
// })