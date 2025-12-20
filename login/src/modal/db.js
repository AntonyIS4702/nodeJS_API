// db.js
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://antonyb0842_db_user:A8101uca6368a@cluster0.zz5n5qv.mongodb.net/?retryWrites=true&w=majority";

let client;
let db;

async function connectDB() {
  if (db) return db; // reuse existing connection

  client = new MongoClient(uri);
  try {
     await client.connect();
       db = client.db("sample_mflix"); // change to your DB name
  console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
 


  return db;
}

module.exports = connectDB;