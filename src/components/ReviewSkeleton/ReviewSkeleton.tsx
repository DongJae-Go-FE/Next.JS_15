import { FC } from "react";

type ReviewSkeletonType = {
  count: number;
};

const ReviewSkeleton: FC<ReviewSkeletonType> = ({ count }) => {
  return [...new Array(count)].map((_, index) => {
    return (
      <div className="flex w-full animate-pulse flex-col gap-y-1" key={index}>
        <div className="flex justify-between">
          <div className="h-6 w-[280px] rounded-md bg-gray-200" />
          <div className="h-6 w-16 rounded-md bg-gray-200" />
        </div>
        <div className="h-6 w-[600px]" />
      </div>
    );
  });
};

export default ReviewSkeleton;
