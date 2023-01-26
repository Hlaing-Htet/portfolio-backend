const DB = require("../models/projectsCat");
const Helper = require("../utils/helper");

const getCats = async (req, res) => {
  const cat = await DB.find();
  Helper.fMsg(res, "add cat", cat);
};

const addCat = async (req, res) => {
  let cat = await new DB(req.body).save();
  Helper.fMsg(res, "Add new cat", cat);
};
const deleteCat = async (req, res) => {
  let cat = await DB.findByIdAndDelete(req.params.id);
  Helper.fMsg(res, "Delete Cat", cat);
};

const updateCat = async (req, res, next) => {
  let cat = await DB.findById(req.params.id);
  if (cat) {
    await DB.findByIdAndUpdate(cat._id, req.body);
    let updatedCat = await DB.findById(cat._id);
    Helper.fMsg(res, "Update cat", updatedCat);
  } else {
    next(new Error("Error, No cat with that id"));
  }
};

module.exports = {
  getCats,
  addCat,
  updateCat,
  deleteCat,
};
