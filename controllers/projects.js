const DB = require("../models/projects");
const Helper = require("../utils/helper");
const { deleteFile } = require("../utils/gallery");

const getprojects = async (req, res) => {
  const projects = await DB.find().populate("projectsCat", "name -_id");
  Helper.fMsg(res, "All projects", projects);
};
const getprojectsByCat = async (req, res) => {
  const projects = await DB.find({ projectsCat: req.params.catId });
  Helper.fMsg(res, "projects by CatId", projects);
};
const addproject = async (req, res) => {
  let project = await new DB(req.body).save();
  let addedproject = await DB.findById(project._id).populate(
    "projectsCat",
    "name -_id"
  );
  Helper.fMsg(res, "Add new project", addedproject);
};
const deleteproject = async (req, res) => {
  let project = await DB.findByIdAndDelete(req.params.id);
  if (project) {
    deleteFile(project.image);
    Helper.fMsg(res, "Delete project", project);
  }
};
const updateproject = async (req, res, next) => {
  let project = await DB.findById(req.params.id);
  if (project) {
    await DB.findByIdAndUpdate(project._id, req.body);
    let updatedproject = await DB.findById(project._id).populate(
      "projectsCat",
      "name -_id"
    );
    Helper.fMsg(res, "update project", updatedproject);
  } else {
    next(new Error("Error , No Social with that id"));
  }
};
module.exports = {
  getprojects,
  addproject,
  updateproject,
  deleteproject,
  getprojectsByCat,
};
