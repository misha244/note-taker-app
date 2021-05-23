const uuid = require('uuid');
const getFromDb = require("../utils/getFromDb");
const writeToDb = require("../utils/writeToDb");

const getNotes = (req, res) => {
  const notes = getFromDb();

  res.json(notes);
};

const saveNote = (req, res) => {
  const note = 
};

module.exports = {
  getNotes,
  saveNote,
};
