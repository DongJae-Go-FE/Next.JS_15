import List from "@/components/List";
import BookItem from "@/components/BookItem/BookItem";

import { BookData } from "@/types";

import getFetchRequest from "@/util/getFetchRequest";

export default async function ServerRecommendBooks() {
  const data = await getFetchRequest<BookData[]>({
    path: "/book/random",
  });

  return (
    <List
      items={data?.map((props, index) => {
        return <BookItem side="server" key={index} {...props} />;
      })}
    />
  );
}
