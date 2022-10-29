const mongoose = require("mongoose");
const validator = require("validator");

const addUserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    username:{
        type:String,
        required:true,
        minlength:5
    },
    email:{
        type:String,
        required:true,
        unique:[ true, "Email id already Present"],
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone : {
        type:Number,
        min:10,
        required:true,
        unique : true
    },
    website : {
        type:String,
        required:true
    }
})

const AddUser = new mongoose.model("AddUser", addUserSchema);
module.exports = AddUser;