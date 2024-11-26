"use client";

import { useQuery } from "@tanstack/react-query";

import List from "@/components/List";
import BookItem from "@/components/BookItem/BookItem";

import { BookData } from "@/types";
import getFetchRequest from "@/util/getFetchRequest";

export default function ClientRecommendBooks() {
  const { data, isLoading } = useQuery({
    queryKey: ["random"],
    queryFn: () =>
      getFetchRequest<BookData[]>({
        path: "/book/random",
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
