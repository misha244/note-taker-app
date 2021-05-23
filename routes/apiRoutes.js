const { Router } = require("express");

const { getNotesData, saveNoteData } = require("../controllers/apiControllers");

const apiRouter = Router();

apiRouter.get("/notes", getNotesData);
apiRouter.post("/notes", saveNoteData);

module.exports = apiRouter;
