const fs = require("fs");

const saveFileFun = (req, next) => {
  let file = req.files.file;
  if (!file) {
    next();
  }
  let fileName = new Date().valueOf() + "_" + file.name;
  file.mv(`./uploads/${fileName}`);
  req.body["title"] = fileName;
  next();
};
const saveFile = (req, res, next) => {
  saveFileFun(req, next);
};
const deleteFile = async (filename) => {
  await fs.unlinkSync(`./uploads/${filename}`);
};
const updateFile = (req, res, next) => {
  deleteFile(req.params.fileName);
  saveFileFun(req, next);
};
module.exports = {
  saveFile,
  deleteFile,
  updateFile,
};
