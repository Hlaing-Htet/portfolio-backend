const DB = require("../models/contact");
const Helper = require("../utils/helper");

const getContacts = async (req, res) => {
  const contact = await DB.find();
  Helper.fMsg(res, "contact data", contact);
};
const addContact = async (req, res) => {
  let contact = await new DB(req.body).save();
  Helper.fMsg(res, "add contact", contact);
};
const deleteContact = async (req, res) => {
  let contact = await DB.findByIdAndDelete(req.params.id);
  Helper.fMsg(res, "Delete Contact", contact);
};
const updateContact = async (req, res, next) => {
  let contact = await DB.findById(req.params.id);
  if (contact) {
    await DB.findByIdAndUpdate(contact._id, req.body);
    let updatedContact = await DB.findById(contact._id);
    Helper.fMsg(res, "Update Contact", updatedContact);
  } else {
    next(new Error("Error"));
  }
};
module.exports = {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
};
