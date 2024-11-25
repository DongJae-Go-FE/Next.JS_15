import { Fragment, ReactNode } from "react";
import Spinner from "../Spinner";
import Empty from "../Empty";
import BookItem from "../BookItem/BookItem";

export type ListType = {
  items?: ReactNode[];
  isLodaing?: boolean;
  isScroll?: boolean;
  isFetchingNextPage?: boolean;
};

export default function List({
  items,
  isLodaing,
  isScroll,
  isFetchingNextPage,
}: ListType) {
  if (isLodaing) {
    return (
      <div className="relative h-[474px] w-full">
        <Spinner />
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="relative h-[474px] w-full">
        <Empty size="md" description="목록이 없습니다" />
      </div>
    );
  }

  const scrollStyle = "max-h-[calc(100% - 108px)] overflow-auto";

  return (
    <ul className={isScroll ? scrollStyle : ""}>
      {items?.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
      {isFetchingNextPage && (
        <Fragment>
          {[0, 1, 2].map((_, index) => {
            return (
              <BookItem
                id={0}
                author=""
                coverImgUrl=""
                description=""
                publisher=""
                subTitle=""
                title=""
                key={index}
                isLoading
              />
            );
          })}
        </Fragment>
      )}
    </ul>
  );
}
