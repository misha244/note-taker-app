const getStaticFilePath = require("../util/getStaticFile");

const renderIndexPage = (req, res) => {
  const filePath = getStaticFilePath("index");

  res.sendFiles(filePath);
};

const renderNotesPage = (req, res) => {
  const filePath = getStaticFilePath("notes");

  res.sendFiles(filePath);
};

module.exports = {
  renderIndexPage,
  renderNotesPage,
};
