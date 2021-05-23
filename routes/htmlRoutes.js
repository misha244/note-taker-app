const { Router } = require("express");

const { renderIndexPage, renderNotesPage } = require("../controllers/html");
const router = Router();

router.get("/notes", renderNotesPage);
router.get("/", renderIndexPage);

module.exports = router;
