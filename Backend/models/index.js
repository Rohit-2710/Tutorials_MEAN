const dbConfig = require("../config/dbConfig");
const mongoose = require("mongoose");
const db = {
  connection: mongoose.connect(dbConfig.url),
};
module.exports = db;
