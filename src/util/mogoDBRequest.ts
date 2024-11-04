import { connectDB } from "./database";

export type MogoDBRequsetType = {
  dbName: string;
  collectionName: string;
  url?: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: HeadersInit;
  body?: BodyInit;
};

export const MogoDBRequest = async ({
  dbName,
  collectionName,
  url,
  method,
  headers,
  body,
}: MogoDBRequsetType) => {
  if (!url) {
    const client = await connectDB;
    const db = client.db(dbName);
    const result = await db.collection(collectionName).find().toArray();

    return result;
  } else {
    try {
      const response = await fetch(url, {
        method: method ? method : "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json;charset=UTF-8",
          ...headers,
        },
        ...(body && { body }),
      });

      const { data, message } = await response.json();

      if (!response.ok || response.status.toString()[0] !== "2") {
        throw new Error("네트워크 응답이 올바르지 않습니다.", message);
      }

      return data as Response;
    } catch (e) {
      console.error(e);
      alert(e);
    }
  }
};

export default MogoDBRequest;
