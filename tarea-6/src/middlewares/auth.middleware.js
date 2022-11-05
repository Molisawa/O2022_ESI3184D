const pkg = require("jsonwebtoken");
var mongoUtil = require("../mongoUtil");
const { ObjectId } = require("mongodb");
var db = mongoUtil.getDb();

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"] || req.headers["authorization"];

    const decoded = pkg.verify(token, process.env.SECRET);
    const user = await db.collection("users").findOne({ _id: ObjectId(decoded._id) });
    
    if (!user) {
      return res.status(404).json({ message: "Invalid token" });
    }

    next();
  } catch (err) {
    res.status(401).send({ message: "Unauthorized!" });
  }
};



module.exports = verifyToken;
