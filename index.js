const express = require("express");
const fs = require("fs");
const cors = require("cors");

const htmlRouter = require("./routes/htmlRoutes");
const apiRouter = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRouter);
app.use("/", htmlRouter);

app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});
