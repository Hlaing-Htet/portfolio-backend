const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  messengar: {
    type: Map,
  },
  email: {
    type: Map,
  },
  phone: {
    type: Map,
  },
  emailJs: {
    type: Map,
  },
});

module.exports = mongoose.model("contact", contactSchema);
