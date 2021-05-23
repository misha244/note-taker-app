const { Router } = require("express");

const { getNotes, saveNote } = require("../controllers/apiControllers");

const apiRouter = Router();

apiRouter.get("/notes", getNotes);
apiRouter.post("/notes", saveNote);

module.exports = apiRouter;
