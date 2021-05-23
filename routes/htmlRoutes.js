const { Router } = require("express");

const { renderIndexPage, renderNotesPage } = require("../controllers/html");
const htmlRouter = Router();

htmlRouter.get("/notes", renderNotesPage);
htmlRouter.get("/", renderIndexPage);

module.exports = htmlRouter;
