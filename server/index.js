const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());

const url = "mongodb://0.0.0.0:27017/expense-tracker";

mongoose
  .connect(url)
  .then((_) => {
    console.log("Connected successfully to mongodb");
  })
  .catch((err) => {
    console.log(err.message);
  });

const Transaction = require("./models/model.js")


addTransaction = async (req,res) => {
  try{
    const transaction_1 = new Transaction(req.body);
    await transaction_1.save();
    res.status(200).send({ msg: "Transaction created Successfully"})
  } catch (err) {
    res.status(500).send(err.message);
  }
}


app.post('/',addTransaction)

app.listen(3000, () => {
  console.log("Server started at 3000");
});
