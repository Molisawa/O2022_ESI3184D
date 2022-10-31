const router = require("express").Router();
const { getUsers, getUserById } = require("./users.controller");

router.get("/", getUsers);
router.get("/:id", getUserById);

module.exports = router;
