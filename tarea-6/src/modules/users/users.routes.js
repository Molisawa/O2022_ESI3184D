const router = require("express").Router();
const {
  getAll,
  getOne,
  create,
  update,
  remove,
} = require("./users.controller");
const  verifyToken  = require("../../middlewares/auth.middleware");

router.get("/",verifyToken, getAll);
router.get("/:id", getOne);
router.post("/",verifyToken, create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
