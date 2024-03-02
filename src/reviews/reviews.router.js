const router = require("express").Router();
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// regex expression, "([0-9]+)",  ensures the route param, :reviewId, consists of just one or more digits
router
  .route("/:reviewId([0-9]+)")
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

module.exports = router;