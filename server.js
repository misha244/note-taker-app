const express = require("express");
const { htmlRouter, apiRouter } = require("./routes/indexRoutes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use("/", htmlRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});
