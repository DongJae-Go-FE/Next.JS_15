import List from "@/components/List";
import BookItem from "@/components/BookItem/BookItem";

import { BookData } from "@/types";

import getFetchRequest from "@/util/getFetchRequest";

export default async function ServerRegisteredAllBooks() {
  const data = await getFetchRequest<BookData[]>({
    path: "/book",
    cache: "force-cache",
  });

  return (
    <List
      items={data?.body?.map((props, index) => {
        return <BookItem side="server" key={index} {...props} />;
      })}
    />
  );
}
