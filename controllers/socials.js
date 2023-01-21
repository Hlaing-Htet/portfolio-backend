const DB = require("../models/socialModel");
const Helper = require("../utils/helper");

const getSocials = async (req, res) => {
  const socials = await DB.find();
  Helper.fMsg(res, "Socials", socials);
};
const addSocial = async (req, res) => {
  let social = await new DB(req.body).save();
  Helper.fMsg(res, "Add new social", social);
};

module.exports = {
  getSocials,
  addSocial,
};
