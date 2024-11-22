import List from "@/components/List";
import BookItem from "@/components/BookItem/BookItem";

import { BookData } from "@/types";

import getFetchRequest from "@/util/getFetchRequest";

export default async function ServerSearchBooks({ query }: { query?: string }) {
  const data = await getFetchRequest<BookData[], { q: string }>({
    path: "/book/search",
    cache: "force-cache",
    params: {
      q: query || "",
    },
  });

  return (
    <List
      items={data?.map((props, index) => {
        return <BookItem side="server" key={index} {...props} />;
      })}
    />
  );
}
