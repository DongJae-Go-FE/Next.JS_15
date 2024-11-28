import { Suspense, FC, PropsWithChildren } from "react";
import Skeleton from "../Skeleton/Skeleton";

const SuspenseSkeleton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="relative h-[474px] w-full">
          <Skeleton count={3} />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseSkeleton;
