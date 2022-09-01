// mongodb+srv://root:root@cluster0.yizcs.mongodb.net/test

const { MongoClient } = require("mongodb");

const url = "mongodb+srv://root:root@cluster0.yizcs.mongodb.net/test";

const client = new MongoClient(url);

const database = "sourav";

const getData = async () => {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("majumder");
  let response = await collection.find({}).toArray();
  console.log(response);
};

getData();
