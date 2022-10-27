const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors());

const port = process.env.PORT || 3002


const apidata = require("./data.json")

app.get("/", (req, res) => {
    res.send("Hello I am live")
});

app.get("/users", (req, res) => {
    res.send(apidata)
});

app.listen(port, () => {
    console.log("I am live now")
})