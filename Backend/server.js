const express = require("express");
const dbConfig = require("../Backend/config/dbConfig");
const db = require("../Backend/models/index");
const cors = require("cors");
const bodyParser = require("body-parser");
app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("../Backend/routes/router")(app);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to mongoDB server" });
});
const port = 8080;
app.listen(port, (err) => {
  if (err) {
    console.log("Server error occured");
  } else {
    db.connection
      .then(console.log("Connectin with mongoose established"))
      .catch((err) => console.log(err.message));
  }
});
