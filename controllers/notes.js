// required modules & package
const { v4: uuidv4 } = require("uuid");
const getFromDb = require("../util/getFromDb");
const writeToDb = require("../util/writeToDb");

// functions to get existing notes and save new ones
const getNotes = (req, res) => {
  const notes = getFromDb();

  res.json(notes);
};

const saveNote = (req, res) => {
  const note = { ...req.body, id: uuidv4() };
  const notes = getFromDb();

  const data = [...notes, note];

  writeToDb(data);

  res.json(data);
};

module.exports = {
  getNotes,
  saveNote,
};
