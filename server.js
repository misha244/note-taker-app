const express = require("express");
const { htmlRouter, apiRouter } = require("./routes/indexRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", htmlRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});
