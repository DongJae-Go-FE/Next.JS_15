"use client";

import List from "@/components/List";
import BookItem from "@/components/BookItem/BookItem";

import Books from "@/mock/books.json";

export default function ClientRegisteredAllBooks() {
  return (
    <List
      items={Books.map((props) => {
        return <BookItem {...props} />;
      })}
    />
  );
}
