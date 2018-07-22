const express = require('express');
const app = express();
const dotenv = require("dotenv");
const env = dotenv.config();
const mongoose = require("mongoose");

const randomManager = require("./managers/random_manager");

// connection to mlab's db
mongoose.connect(`mongodb://${env.parsed["USER"]}:${env.parsed["PASSWORD"]}@${env.parsed["DB"]}`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log("connected to mlab's db");
}, (err) => {
    console.log("ERR --> ", err);
});

// testing endpoint
app.get('/', (req, res) => res.send('Hello World!'));

// list randomizer endpoint
app.get("/randomize/:list", randomManager.randomList)

// port setting for app to run
app.listen(env.parsed["PORT"], () => console.log(`Example app listening on port ${env.parsed["PORT"]}!`));