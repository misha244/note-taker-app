// required package
const path = require("path");

// function to establish a static file path for all files
const getStaticFilePath = (fileName) => {
  try {
    const filePath = path.join(__dirname, "../public", `/${fileName}.html`);
    return filePath;
  } catch (err) {
    console.log(err);
  }
};

module.exports = getStaticFilePath;
