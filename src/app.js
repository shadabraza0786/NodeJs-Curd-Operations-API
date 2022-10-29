const express = require("express");
require("./db/connection")
const Users = require("./models/addUsers");
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3005


app.get("/", (req, res) => {
    res.send("Hello I am live")
});

app.post("/addUser", (req, res) => {
    console.log(req.body)
    const user = new Users(req.body);
    user.save().then(() =>{
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
    
})

app.get("/getUsers", async (req, res) => {

    try{
        const UsersData  = await Users.find();
        res.send(UsersData)
    }catch(e){
        res.send(e)
    }
});

app.listen(port, () => {
    console.log(`connection is setup at ${port}`)
})