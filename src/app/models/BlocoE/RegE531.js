const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codPart: {
    type: String
  },
  codMod: {
    type: String,
    required: true
  },
  ser: {
    type: String
  },
  sub: {
    type: String
  },
  numDoc: {
    type: String,
    required: true
  },
  dtDoc: {
    type: String,
    required: true
  },
  codItem: {
    type: String
  },
  vlAjItem: {
    type: String,
    required: true
  },
  chvNfe: {
    type: String
  },
  flag: {
    type: String,
    required: true
  },
  reg0000: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model("regC990", RegSchema);
