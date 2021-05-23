const express = require("express");
const fs = require("fs");

const { htmlRouter, apiRouter } = require("./routes/indexRoutes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use("/api", apiRouter);
app.use("/", htmlRouter);

app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});
