const getStaticFilePath = require("../util/getStaticFile");

const renderNotesPage = (req, res) => {
  const filePath = getStaticFilePath("notes");

  res.sendFiles(filePath);
};

const renderIndexPage = (req, res) => {
  const filePath = getStaticFilePath("index");

  res.sendFiles(filePath);
};

module.exports = { renderNotesPage, renderIndexPage };
