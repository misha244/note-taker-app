// required modules & package
const { Router } = require("express");

const { getNotes, saveNote } = require("../controllers/notes");
const router = Router();

// link router to relevant functions
router.get("/notes", getNotes);
router.post("/notes", saveNote);

module.exports = router;
