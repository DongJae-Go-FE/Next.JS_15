import { Fragment, ReactNode } from "react";
import Spinner from "../Spinner";
import Empty from "../Empty";
import Skeleton from "../Skeleton/Skeleton";

export type ListType = {
  items?: ReactNode[];
  isLoading?: boolean;
  isScroll?: boolean;
  isFetchingNextPage?: boolean;
};

export default function List({
  items,
  isLoading,
  isScroll,
  isFetchingNextPage,
}: ListType) {
  if (isLoading) {
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
          <Skeleton count={3} />
        </Fragment>
      )}
    </ul>
  );
}
