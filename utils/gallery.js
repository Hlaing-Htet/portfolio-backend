const fs = require("fs");
const DB = require("../models/socialModel");

const saveFileFun = (req, next) => {
  let file = req.files.file;
  if (!file) {
    next();
  }
  let filename = new Date().valueOf() + "_" + file.name;
  file.mv(`./uploads/${filename}`);
  req.body["image"] = filename;
  next();
};

const saveFile = (req, res, next) => {
  saveFileFun(req, next);
};
const deleteFile = async (filename) => {
  await fs.unlinkSync(`./uploads/${filename}`);
};
const updateFile = (req, res, next) => {
  if (req.params.fileName !== "image.png") {
    deleteFile(req.params.fileName);
  }
  saveFileFun(req, next);
};
const updateFileInDB = async (req, res, next) => {
  const social = await DB.findById(req.params.id);

  deleteFile(social.image);
  saveFileFun(req, next);
};
module.exports = {
  saveFile,
  deleteFile,
  updateFile,
  updateFileInDB,
};
