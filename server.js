const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = 3000;

const server = express();

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
