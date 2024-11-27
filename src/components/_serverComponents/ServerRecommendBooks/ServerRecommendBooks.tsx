import List from "@/components/List";
import BookItem from "@/components/BookItem/BookItem";

import { BookData } from "@/types";

import getFetchRequest from "@/util/getFetchRequest";

export default async function ServerRecommendBooks() {
  const data = await getFetchRequest<BookData[], { revalidate: number }>({
    path: "/book/random",
    next: { revalidate: 3 },
  });

  return (
    <List
      items={data?.body?.map((props, index) => {
        return <BookItem side="server" key={index} {...props} />;
      })}
    />
  );
}
