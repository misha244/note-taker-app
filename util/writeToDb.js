// required packages
const fs = require("fs");
const path = require("path");

// function to add to database
const writeToDb = (data) => {
  try {
    const filePath = path.join(__dirname, "../db/db.json");
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeToDb;
