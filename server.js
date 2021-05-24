// required packages & modules
const express = require("express");
const cors = require("cors");

const { apiRouter, htmlRouter } = require("./routes/indexRoutes");

// set up port
const PORT = process.env.PORT || 8000;
const app = express();

// app usage
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));

// app routes
app.use("/api", apiRouter);
app.use("/", htmlRouter);

app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});
