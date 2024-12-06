import client from "./database";

export type MongoDBRequestType = {
  dbName: string;
  collectionName: string;
  url?: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: HeadersInit;
  body?: BodyInit;
};

export const MongoDBRequest = async ({
  dbName,
  collectionName,
  url,
  method,
  headers,
  body,
}: MongoDBRequestType) => {
  if (!url) {
    const dbSetting = client;
    const db = dbSetting.db(dbName);
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
      // .

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

export default MongoDBRequest;
