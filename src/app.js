const express = require("express");
require("./db/connection")
const Users = require("./models/addUsers");
const cors = require("cors");
const { urlencoded } = require("express");
const app = express();

app.use(cors());


const port = process.env.PORT || 3005

//middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello I am live")
});

// Post Request

app.post("/addUser", (req, res) => {

    const user = new Users(req.body);
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })

})

// Get All Users

app.get("/getUsers", (req, res) => {
    Users.find().then((users) => {
        res.send(users)
    }).catch((error) => {
        res.send(error)
    })
})

// Get Users by Id

app.get("/:usersId", (req, res) => {
    Users.findById(req.params.usersId).then((user) => {
        if(user) {
            res.send(user);
        }else {
            res.status(404).send("User not found")
        }
        
    }).catch((error) => {
        res.status(500).send(error)
    })
})


// Update Users by Id

app.put("/:usersId", async (req, res) => {
    const updateUser = await Users.findByIdAndUpdate(
        req.params.usersId,
        {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            website: req.body.website,
        },
    );
    if (!updateUser) {
        res.status(404).send("User Not found")
    } else {
        res.send(updateUser)
    }

})

// Delete User Based on Id

app.delete("/:usersId", async (req, res) => {
    const deleteUser = await Users.findByIdAndRemove(req.params.usersId);
    if (!deleteUser) {
        res.status(404).send("User with id not found");
    } else {
        res.send(deleteUser);
    }
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`)
})