import MogoDBRequest from "@/util/mogoDBRequest";
import { use } from "react";
import wait from "@/util/wait";

export default function Test() {
  use(wait(2000));

  const test = use(
    MogoDBRequest({
      collectionName: "todoList",
      dbName: "todoList",
    }),
  );

//  console.log(test);

  return <div className="">{}</div>;
}
