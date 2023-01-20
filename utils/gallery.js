const fs = require("fs");

const saveFile = (req, res, next) => {
  let file = req.files.file;
  let filename = new Date().valueOf() + "_" + file.name;
  file.mv(`./uploads/${filename}`);
  req.body["image"] = filename;
  next();
};
const deleteFile = async (filename) => {
  await fs.unlinkSync(`./uploads/${filename}`);
};
module.exports = {
  saveFile,
  deleteFile,
};
