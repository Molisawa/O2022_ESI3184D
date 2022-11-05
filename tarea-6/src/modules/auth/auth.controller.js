const { ObjectId } = require("mongodb");
var mongoUtil = require("../../mongoUtil");
var db = mongoUtil.getDb();
const pkg = require("jsonwebtoken");
const { sign } = pkg;

const {
  encryptPassword,
  comparePassword,
} = require("../users/users.controller");
const User = require("../users/users.model");

const signUP = async (req, res) => {

  const newUser = new User(
    req.body.name,
    req.body.email,
    encryptPassword(req.body.password)
  );

  await db.collection("users").insertOne(newUser);

  const token = sign({ id: newUser._id }, process.env.SECRET, {
    expiresIn: "1d",
  });

  res.status(200).json({ auth: true, token });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await db.collection("users").findOne({ email });

  if (!user) {
    return res.status(404).send("No user found.");
  }

  const passwordIsValid = await comparePassword(password, user.password);

  if (!passwordIsValid) {
    return res.status(401).send({ auth: false, token: null });
  }

  const token = sign({ _id: user._id }, process.env.SECRET, {
    expiresIn: "1d",
  });

  res.status(200).json({ auth: true, token });

};

module.exports = {
  signIn,
  signUP,
};
