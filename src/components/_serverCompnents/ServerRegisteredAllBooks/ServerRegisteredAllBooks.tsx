import List from "@/components/List";
import BookItem from "@/components/BookItem/BookItem";

import Books from "@/mock/books.json";

export default function ServerRegisteredAllBooks() {
  return (
    <List
      items={Books.map((props) => {
        return <BookItem {...props} />;
      })}
    />
  );
}
