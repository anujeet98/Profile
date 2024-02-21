require('dotenv').config();
const serverless = require("serverless-http");
const express = require("express");
let cors = require('cors');
const mongoose = require('mongoose');
let Entries = require('./entries');


const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from the profile backend!",
  });
});

app.get("/entries", async(req, res, next) => {
  const result = await Entries.find();
  return res.status(200).json({
    message: result,
  });
});


app.post('/entries', async(req, res, next) => {
  const newEntry = new Entries({entry:req.body});
  await newEntry.save();
  res.sendStatus(200);
})

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

const con = async() => {
  await mongoose.connect(`${process.env.MONGODB_CONN_STR}`);
};
con();
module.exports.handler = serverless(app);
