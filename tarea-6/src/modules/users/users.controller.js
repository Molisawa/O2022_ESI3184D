const { ObjectId } = require("mongodb");
var mongoUtil = require("../../mongoUtil");
var db = mongoUtil.getDb();
const User = require("./users.model");
const bcrypt = require("bcryptjs");




function getAll(req, res) {
  db.collection("users").find({}).toArray(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
}

function getOne(req, res) {
  db.collection("users").findOne(
    { _id: ObjectId(req.params.id) },
    function (err, result) {
      if (err) throw err;
      res.json(result);
    }
  );
}

function create(req, res) {
  console.log('entro', req.body);
  const user = new User(req.body.name, req.body.email, req.body.password);

  db.collection("users").insertOne(user, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
}

function update(req, res) {
  db.collection("users").updateOne(
    { _id: ObjectId(req.params.id) },
    { $set: req.body },
    function (err, result) {
      if (err) throw err;
      res.json(result);
    }
  );
}

function remove(req, res) {
  db.collection("users").deleteOne(
    { _id: ObjectId(req.params.id) },
    function (err, result) {
      if (err) throw err;
      res.json(result);
    }
  );
}

function encryptPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}


module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
  encryptPassword,
  comparePassword,
};
