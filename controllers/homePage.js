const DB = require("../models/homePage");
const Helper = require("../utils/helper");
const getData = async (req, res) => {
  const homeData = await DB.find();

  Helper.fMsg(res, "Home Data", homeData);
};
const addData = async (req, res) => {
  let homeData = await new DB(req.body).save();
  Helper.fMsg(res, "Add Home Data", homeData);
};
const updateData = async (req, res, next) => {
  let data = await DB.findById(req.params.id);
  console.log(req.body);
  if (data) {
    await DB.findByIdAndUpdate(data._id, req.body);
    let newData = await DB.findById(data._id);
    Helper.fMsg(res, "Update Data", newData);
  } else {
    next(new Error("Error, No Data with that id"));
  }
};

module.exports = {
  getData,
  addData,
  updateData,
};
