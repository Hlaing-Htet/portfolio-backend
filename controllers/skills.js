const DB = require("../models/skills");
const Helper = require("../utils/helper");
const mongoose = require("mongoose");
const { deleteFile } = require("../utils/gallery");

const getSkills = async (req, res) => {
  const skills = await DB.find().populate("skillsCat", "name -_id");
  Helper.fMsg(res, "All Skills", skills);
};
const getSkillsByCat = async (req, res, next) => {
  const id = req.params.catId;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such skills" });
  }
  const skills = await DB.find({ skillsCat: id });
  Helper.fMsg(res, "Skills by CatId", skills);
};
const addSkill = async (req, res) => {
  let skill = await new DB(req.body).save();
  let addedSkill = await DB.findById(skill._id).populate(
    "skillsCat",
    "name -_id"
  );
  Helper.fMsg(res, "Add new Skill", addedSkill);
};
const deleteSkill = async (req, res) => {
  let skill = await DB.findByIdAndDelete(req.params.id);
  if (skill) {
    deleteFile(skill.image);
    Helper.fMsg(res, "Delete skill", skill);
  }
};
const updateSkill = async (req, res, next) => {
  let skill = await DB.findById(req.params.id);
  if (skill) {
    await DB.findByIdAndUpdate(skill._id, req.body);
    let updatedSkill = await DB.findById(skill._id).populate(
      "skillsCat",
      "name -_id"
    );
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
  getSkillsByCat,
};
