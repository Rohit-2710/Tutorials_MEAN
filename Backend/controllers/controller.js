const Tutorials = require("../models/model");
const db = require("../models/index");
module.exports = {
  addTutorial: async (req, res) => {
    const { title, author, description, published } = req.body;
    console.log(req.body);
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
    const { limit } = req.body;
    const result = await Tutorials.find().limit(limit);
    return res.send(result);
  },
  getTutorialById: async (req, res) => {
    const { id } = req.params;
    const tutorial = await Tutorials.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "Resource not found by" });
        } else return data;
      })
      .catch((err) => {
        res
          .status(500)
          .json({ error: err.message || "Server met with an error" });
      });
    res.send(tutorial);
  },
  updateTutorial: async (req, res) => {
    const { id } = req.params;
    const { title, author, description, published } = req.body;
    const result = Tutorials.findByIdAndUpdate(
      { _id: id },
      { title, author, description, published }
    )
      .then((data) => {
        if (!data) {
          res.send({ message: "No data found for the given Id" });
        }
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({ error: "Internal server error occures" });
      });
  },
  deleteTutorial: async (req, res) => {
    const { id } = req.params;
    const result = await Tutorials.deleteOne({ _id: id })
      .then((data) => {
        res.status(200).send({ message: "Deletion successful" });
      })
      .catch((err) => {
        res.status(500).send({ error: "Internal server error occured" });
      });
  },
};
