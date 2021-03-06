const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  cstIcms: {
    type: String,
    required: true
  },
  cfop: {
    type: String,
    required: true
  },
  aliqIcms: {
    type: String,
    required: true
  },
  vlOpr: {
    type: String,
    required: true
  },
  vlBcIcms: {
    type: String,
    required: true
  },
  vlIcms: {
    type: String,
    required: true
  },
  vlBcIcmsSt: {
    type: String,
    required: true
  },
  vlIcmsSt: {
    type: String,
    required: true
  },
  vlRedBc: {
    type: String,
    required: true
  },
  vlIpi: {
    type: String,
    required: true
  },
  codObs: {
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

module.exports = mongoose.model("regC190", RegSchema);
