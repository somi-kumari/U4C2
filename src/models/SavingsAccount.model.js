// account_number ( required and should be unique)
// balance ( required )
// interestRate ( required )
// createdAt (required)
// updatedAt (required)
const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const savingSchema = new mongoose.Schema({
  account_number: { type: Number, required: true, unique: true },
  balance: { type: Number, required: true },
  interestRate: { type: Number, required: true },

  createdAt: { type: Timestamp, required: required },
  updatedAt: { type: Timestamp, required: required },
});
