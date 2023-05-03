module.exports = (app) => {
  const router = require("express").Router();
  const tutorials = require("../controllers/controller");

  router.get("/listTutorials", tutorials.getTutorials);
  router.get("/getTutorial/:id", tutorials.getTutorialById);
  router.post("/createTutorial", tutorials.addTutorial);
  router.patch("/updateTutorial/:id", tutorials.updateTutorial);
  router.delete("/deleteTutorial/:id", tutorials.deleteTutorial);
  app.use("/api/tutorials", router);
};
