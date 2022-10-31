const { ObjectId } = require("mongodb");
var mongoUtil = require("../../mongoUtil");
var db = mongoUtil.getDb();

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await db.collection("users").find().toArray();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await db
        .collection("users")
        .findOne({ _id: new ObjectId(req.params.id) });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
