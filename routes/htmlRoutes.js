const { Router } = require("express");

const {
  renderIndexPage,
  renderNotesPage,
} = require("../controllers/htmlControllers");
const htmlRouter = Router();

htmlRouter.get("/", renderIndexPage);
htmlRouter.get("/notes", renderNotesPage);

module.exports = htmlRouter;
