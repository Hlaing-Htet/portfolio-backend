const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const socialSchema = new Schema({
  image: {
    type: String,
  },
  url_link: {
    type: String,
  },
});

module.exports = mongoose.model("social", socialSchema);
