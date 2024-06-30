require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

const cors = require('cors');

// cors stuff
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("home route works")
})


app.listen(3000, ()=> {
    console.log("Server running on port 3000")
})
