const dotenv = require("dotenv");
const MongoClient = require("mongodb").MongoClient;
dotenv.config();

const url = process.env.DATABASE_URL;

var _db;

module.exports = {
  connectToServer: function (callback) {
    const client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(function (err, client) {
      _db = client.db("memGen");
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
