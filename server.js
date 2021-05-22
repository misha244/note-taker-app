const express = require("express");
const { htmlRoutes } = require("./routes/indexRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});
