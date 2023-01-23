const DB = require("../models/socialModel");
const Helper = require("../utils/helper");
const { deleteFile } = require("../utils/gallery");

const getSocials = async (req, res) => {
  const socials = await DB.find();

  Helper.fMsg(res, "Socials", socials);
};
const addSocial = async (req, res) => {
  let social = await new DB(req.body).save();
  Helper.fMsg(res, "Add new social", social);
};
const deleteSocial = async (req, res) => {
  let social = await DB.findByIdAndDelete(req.params.id);

  deleteFile(social.image);
  Helper.fMsg(res, "Delete social", social);
};
const updateSocial = async (req, res, next) => {
  let social = await DB.findById(req.params.id);
  if (social) {
    await DB.findByIdAndUpdate(social._id, req.body);
    let newSocial = await DB.findById(social._id);
    Helper.fMsg(res, "Update social", newSocial);
  } else {
    next(new Error("Error, No Social with that id"));
  }
};

module.exports = {
  getSocials,
  deleteSocial,
  addSocial,
  updateSocial,
};
