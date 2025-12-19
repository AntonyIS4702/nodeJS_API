// db.js
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://antonyb0842_db_user:A8101uca6368@cluster0.zz5n5qv.mongodb.net/?retryWrites=true&w=majority";

let client;
let db;

async function connectDB() {
  if (db) return db; // reuse existing connection

  client = new MongoClient(uri);
  await client.connect();
  console.log("✅ Connected to MongoDB Atlas");

  db = client.db("sample_mflix"); // change to your DB name
  return db;
}

module.exports = connectDB;
