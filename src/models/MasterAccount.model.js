// balance (required) This is the total balance that the person has in the bank
// createdAt (required)
// updatedAt (required)
const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const masterSchema = new mongoose.Schema({
  balance: { type: Number, required: true },

  createdAt: { type: Timestamp, required: true },
  updatedAt: { type: Timestamp, required: true },
});
