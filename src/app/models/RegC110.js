const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codInf: {
    type: String,
    required: true,
  },
  txtCompl: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC110', RegSchema)
