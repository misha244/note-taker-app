const fs = require("fs");
const path = require("path");

const getFromDb = () => {
  try {
    const filePath = path.join(__dirname, "../db/db.json");
    const database = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(database);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getFromDb;
