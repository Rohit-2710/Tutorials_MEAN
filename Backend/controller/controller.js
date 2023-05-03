const Tutorials = require("../models/model");
const db = require("../models/index");
module.exports = {
  addTutorial: async (req, res) => {
    const { title, author, description, published } = req.body;
    const tutorial = new Tutorials({ title, author, description, published });
    tutorial
      .save()
      .then((data) => res.status(200).send(data))
      .catch((err) => {
        res
          .status(500)
          .json({ error: err.message || "Server met with an error" });
      });
  },
  getTutorials: async (req, res) => {
    const { limit } = req.query;
    const result = await Tutorials.find({}, (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ error: err.message || "Server met with an error" });
      }
      if (data) {
        return data;
      }
    }).limit(limit);
    return result;
  },
  getTutorialById: async (req, res) => {
    const { id } = req.query;
    const tutorial = await Tutorials.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "Resource not found" });
        } else return data;
      })
      .catch((err) => {
        res
          .status(500)
          .json({ error: err.message || "Server met with an error" });
      });
    return tutorial;
  },
};
