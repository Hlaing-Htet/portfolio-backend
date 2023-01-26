const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  projectsCat: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "projectsCat",
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  demo_link: {
    type: String,
  },
  code_link: {
    type: String,
  },
});

module.exports = mongoose.model("project", projectsSchema);
