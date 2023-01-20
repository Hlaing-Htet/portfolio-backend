const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const homeSchema = new Schema({
  work_title: {
    type: String,
    default: "FullStack Developer",
  },
  desc: {
    type: String,
    default:
      "Love to create designs and coding. In good logical Thinking and Problem Solving",
  },
  typed_text: {
    type: Array,
    default: ["HLAING HTET", "WEB DEVELOPER"],
  },
  image: {
    type: String,
  },
});
module.exports = mongoose.model("homedata", homeSchema);
