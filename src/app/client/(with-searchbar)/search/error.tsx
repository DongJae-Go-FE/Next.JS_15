"use client";

import { startTransition, useEffect, useState } from "react";
import Empty from "@/components/Empty";
import { useRouter } from "next/navigation";

//모든 환경에서 발생할 수 있기 때문에 클라이언트로 만든다.

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const { refresh } = useRouter();

  const [errorText, setErrorText] = useState<string>();

  useEffect(() => {
    console.error(error);
    setErrorText(error.message);
  }, [error]);

  return (
    <div className="flex h-[calc(100%-90px)] items-center justify-center">
      검색과정 오류
      <Empty size="md" description={`${errorText} 오류`} />
      {/* <button
        className="relative top-2 h-10 rounded bg-black px-4 text-white"
        type="button"
        onClick={() => reset()}
      >
        다시 시도
      </button> */}
      {/* <button
        className="relative top-2 h-10 rounded bg-black px-4 text-white"
        type="button"
        onClick={() => window.location.reload()}
      >
        다시 시도
      </button> */}
      <button
        className="relative top-2 h-10 rounded bg-black px-4 text-white"
        type="button"
        onClick={() => {
          startTransition(() => {
            refresh(); // 현재 페이지에 필요한 서버 컴포넌트들을 다시 불러옴
            reset(); // 에러 상태를 초기화 하고, 컴포넌트들 다시 렌더링
          });
          // 모두 일괄적으로 동시에 처리 하게 한다.
        }}
      >
        다시 시도
      </button>
    </div>
  );
}

//reset는 서버를 다시 실행하는 것이 아닌 그냥 새로고침 해보는 것
//즉 서버에서 실행하는 서버 컴포넌트는 다시 실행하는 것은 아님
// 클라이언트만 가능
