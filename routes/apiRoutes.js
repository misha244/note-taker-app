const { Router } = require("express");

const { getNotes, saveNote } = require("../controllers/notes");

const apiRouter = Router();

apiRouter.get("/notes", getNotes);
apiRouter.post("/notes", saveNote);

module.exports = apiRouter;
