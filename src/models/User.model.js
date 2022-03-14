// firstName (required)
// middleName (optional)
// lastName (required)
// age (required)
// email (required )
// address ( required )
// gender ( optional and should default to Female )
// type (optional and it can take value of customer or employee and if not provided then default to customer )
// createdAt (required)
// updatedAt (required)
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },

  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: address, required: true },
  gender: { type: String, required: false },
  type: { type: String, required: false },
  createdAt: { type: Number, required: required },
  updatedAt: { type: Number, required: required },
});
