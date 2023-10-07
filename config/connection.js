const { MongoClient } = require("mongodb");
var db = null;
const url =
  "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "Knowvative";

module.exports.connect = function () {
  client.connect();
  return console.log("Connected successfully to server");
};

module.exports.get = function () {
  db = client.db(dbName);
  return db;
};
