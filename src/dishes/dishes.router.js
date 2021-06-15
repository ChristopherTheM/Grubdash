//List of imports required

const router = require("express").Router();
const controller = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /dishes routes needed to make the tests pass

//Routes for /:dishId when a specific ID is passed into the URL
router
  .route("/:dishId")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

//routes for URL ending in /dishes
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
