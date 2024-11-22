"use client";

import { useQuery } from "@tanstack/react-query";

import List from "@/components/List";
import BookItem from "@/components/BookItem/BookItem";

import { BookData } from "@/types";
import getFetchRequest from "@/util/getFetchRequest";

export default function ClientSearchBooks({ query }: { query?: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["book-search", query],
    queryFn: () =>
      getFetchRequest<BookData[], { q: string }>({
        path: "/book/search",
        params: {
          q: query || "",
        },
      }),
  });

  return (
    <List
      items={data?.map((props, index) => {
        return <BookItem side="client" key={index} {...props} />;
      })}
      isLodaing={isLoading}
    />
  );
}
