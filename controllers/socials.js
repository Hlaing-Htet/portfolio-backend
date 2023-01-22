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
  console.log(req.params.id);
  let social = await DB.findByIdAndDelete(req.params.id);
  console.log(social);
  deleteFile(social.image);
  Helper.fMsg(res, "Delete social", social);
};

module.exports = {
  getSocials,
  deleteSocial,
  addSocial,
};
