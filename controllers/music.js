const DB = require("../models/music");
const Helper = require("../utils/helper");
const { deleteFile } = require("../utils/music");

const getMusics = async (req, res) => {
  const music = await DB.find();
  Helper.fMsg(res, "Musics", music);
};

const addMusic = async (req, res) => {
  let music = await new DB(req.body).save();
  Helper.fMsg(res, "Add music", music);
};
const deleteMusic = async (req, res) => {
  let music = await DB.findByIdAndDelete(req.params.id);

  deleteFile(music.title);
  Helper.fMsg(res, "Delete music", music);
};

const updateMusic = async (req, res, next) => {
  let music = await DB.findById(req.params.id);

  if (music) {
    await DB.findByIdAndUpdate(music._id, req.body);
    let newmusic = await DB.findById(music._id);
    Helper.fMsg(res, "Update music", newmusic);
  } else {
    next(new Error("Error, No music with that id"));
  }
};

module.exports = {
  getMusics,
  addMusic,
  deleteMusic,
  updateMusic,
};
