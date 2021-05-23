const { Router } = require("express");

const { getNotes, saveNote } = require("../controllers/notes");

const router = Router();

router.get("/notes", getNotes);
router.post("/notes", saveNote);

module.exports = router;
