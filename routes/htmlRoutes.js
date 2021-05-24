// required modules & package
const { Router } = require("express");

const { renderIndexPage, renderNotesPage } = require("../controllers/html");
const router = Router();

// link router to relevant functions
router.get("/notes", renderNotesPage);
router.get("/", renderIndexPage);

module.exports = router;
