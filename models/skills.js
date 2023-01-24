const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const skillsSchema = new Schema({
  skillsCat: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "skillsCat",
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
    default: "basic",
  },
});

module.exports = mongoose.model("skill", skillsSchema);
