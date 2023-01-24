const DB = require("../models/skills");
const Helper = require("../utils/helper");
const { deleteFile } = require("../utils/gallery");

const getSkills = async (req, res) => {
  const skills = await DB.find();
  Helper.fMsg(res, "All Skills", skills);
};
const addSkill = async (req, res) => {
  let skill = await new DB(req.body).save();
  Helper.fMsg(res, "Add new Skill", skill);
};
const deleteSkill = async (req, res) => {
  let skill = await DB.findByIdAndDelete(req.params.id);
  deleteFile(skill.image);
  Helper.fMsg(res, "Delete skill", skill);
};
const updateSkill = async (req, res, next) => {
  let skill = await DB.findById(req.params.id);
  if (skill) {
    await DB.findByIdAndUpdate(skill._id, req.body);
    let updatedSkill = await DB.findById(skill._id);
    Helper.fMsg(res, "update skill", updatedSkill);
  } else {
    next(new Error("Error , No Social with that id"));
  }
};
module.exports = {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
};
