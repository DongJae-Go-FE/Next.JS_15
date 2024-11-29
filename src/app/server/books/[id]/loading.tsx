import ReviewSkeleton from "@/components/ReviewSkeleton";

export default function Loading() {
  return (
    <main className="flex items-center justify-center">
      <div className="min-h-[800px] w-[800px] animate-pulse rounded-2xl bg-white p-7 shadow-md">
        <div className="m-auto h-[322px] w-[300px] rounded-md bg-gray-200" />
        <div className="w-[100px]rounded-md mb-1 mt-7 h-7 bg-gray-200" />
        <div className="my-2 h-6 w-[130px] rounded-md bg-gray-200" />
        <div className="my-2 h-6 w-[100px] rounded-md bg-gray-200" />
        <div className="h-[132px] w-full rounded-md bg-gray-200" />
        <div className="mt-5 h-10 w-full rounded-md bg-gray-200" />
        <div className="mt-3 h-[90px] w-full rounded-md bg-gray-200" />
        <div className="mt-3 flex h-12 w-full justify-end">
          <div className="h-12 w-[87px] rounded-md bg-gray-200" />
        </div>
        <div className="mt-9 flex w-full flex-col gap-y-2">
          <ReviewSkeleton count={4} />
        </div>
      </div>
    </main>
  );
}

/**
 * 주의점
 * 같은 경로에 있는 것만 스트리밍 하는 것이 아니라 레이아웃처럼 하위 경로에 있는 모든 파일을
 * 스트리밍으로 해야한다.
 *
 * 해당 페이지 컴포넌트 뿐만 아니라 밑에 있는 해당 페이지 경로 아래 있는 비동기 페이지들을
 * 다 스트리밍 처리해준다.
 *
 * 두번째는 async만 붙은 컴포넌트만 스트리밍 한다.
 *
 * 세번쨰 스트리밍은 페이지 컴포넌트에만 적용이 가능하다. 레이아웃이나 일반 컴포넌트에는 불가능
 *
 * 페이지 경로가 바뀐게 아니라 쿼리스트링값만 바꾸면 스트리밍 미작동
 */
