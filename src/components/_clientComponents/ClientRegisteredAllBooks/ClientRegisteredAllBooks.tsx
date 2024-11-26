"use client";

import { useQuery } from "@tanstack/react-query";

import List from "@/components/List";
import BookItem from "@/components/BookItem/BookItem";

import { BookData } from "@/types";
import getFetchRequest from "@/util/getFetchRequest";

export default function ClientRegisteredAllBooks() {
  const { data, isLoading } = useQuery({
    queryKey: ["book"],
    queryFn: () =>
      getFetchRequest<BookData[]>({
        path: "/book",
      }),
  });

  return (
    <List
      items={data?.body?.map((props, index) => {
        return <BookItem side="client" key={index} {...props} />;
      })}
      isLodaing={isLoading}
    />
  );
}
