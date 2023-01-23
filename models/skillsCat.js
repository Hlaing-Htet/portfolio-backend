const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const skillsCatSchema = new Schema({
  name: {
    type: String,
  },
  show: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("skillsCat", skillsCatSchema);
