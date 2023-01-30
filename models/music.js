const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const musicSchema = new Schema({
  title: {
    type: String,
  },
  show: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("music", musicSchema);
