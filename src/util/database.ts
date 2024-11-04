import { MongoClient } from "mongodb";

let connectDB: Promise<MongoClient>;

const url = process.env.MOGO_DB_URL;

if (!url) {
  throw new Error("몽고 디비 데이터 없어");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}

export { connectDB };
