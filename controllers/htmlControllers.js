const path = require("path");

const renderIndexPage = (req, res) => {
  const filePath = path.join(__dirname, "../public/index.html");
  res.sendFiles(filePath);
};

const renderNotesPage = (req, res) => {
  const filePath = path.join(__dirname, "../public/notes.html");
  res.sendFiles(filePath);
};

module.exports = {
  renderIndexPage,
  renderNotesPage,
};
