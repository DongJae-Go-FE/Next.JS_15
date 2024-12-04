import mongoose from "mongoose";

export async function dbComment() {
  try {
    const conn = await mongoose.connect(String(process.env.MONGO_DB_URL));

    return conn;
  } catch (e) {
    throw new Error(`${e}`);
  }
}
