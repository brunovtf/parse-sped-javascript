const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  dtSaida: {
    type: String,
    required: true,
  },
  codItem: {
    type: String,
    required: true,
  },
  qtd: {
    type: String,
    required: true,
  },
  codInsSubst: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regK235", RegSchema);