//imports required to run functions at certain URL endpoints

const router = require("express").Router();
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
// TODO: Implement the /orders routes needed to make the tests pass

//all CRUD operations that need to be performed at the URL endpoint /orders/:orderId
router
  .route("/:orderId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

//all CRUD operations performed at the URL endpoint /orders
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
