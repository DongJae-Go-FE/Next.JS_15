import { FC } from "react";

import BookItem from "@/components/BookItem/BookItem";

type SkeletonType = {
  count: number;
};

const Skeleton: FC<SkeletonType> = ({ count }) => {
  return [...new Array(count)].map((_, index) => {
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
  });
};

export default Skeleton;
