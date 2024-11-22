"use client";

import List from "@/components/List";
import BookItem from "@/components/BookItem/BookItem";

import Books from "@/mock/books.json";

export default function ClientRecommendBooks() {
  return (
    <List
      items={Books.map((props, index) => {
        return <BookItem side="client" key={index} {...props} />;
      })}
    />
  );
}
