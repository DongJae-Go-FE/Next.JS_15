import { FC } from "react";

type ReviewSkeletonType = {
  count: number;
};

const ReviewSkeleton: FC<ReviewSkeletonType> = ({ count }) => {
  return [...new Array(count)].map((_, index) => {
    return (
      <div className="flex w-full animate-pulse flex-col gap-y-1" key={index}>
        <div className="flex justify-between">
          <div className="skeleton-basic h-6 w-[280px]" />
          <div className="skeleton-basic h-6 w-16" />
        </div>
        <div className="h-6 w-[600px]" />
      </div>
    );
  });
};

export default ReviewSkeleton;
