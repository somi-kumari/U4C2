// name (required)
// address (required)
// IFSC (required and string)
// MICR (required and number )
// createdAt (required)
// updatedAt (required)
const mongoose = require("mongoose");
const branchDetailSchema = new mongoose.Schema({
  name: { type: String, required: true },

  ifsc: { type: String, required: true },
  micr: { type: Number, required: true },
  address: { type: address, required: true },

  createdAt: { type: Number, required: required },
  updatedAt: { type: Number, required: required },
});
