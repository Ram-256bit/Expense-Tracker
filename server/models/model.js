const mongoose = require("mongoose");

const TransactionModel = new mongoose.Schema({
  id: {
    type: Number,
  },
  createdDate: {
    type: Date,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
  debit: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Transaction", TransactionModel)
