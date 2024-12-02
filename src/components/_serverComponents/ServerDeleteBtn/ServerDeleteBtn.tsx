"use client";

import { useRef, useActionState, useEffect } from "react";
import { handleSeverDel } from "@/actions/handleServerDel";

type DelSubmitType = {
  reviewId: number;
  bookId: string;
};

export default function ServerDeleteBtn({ reviewId, bookId }: DelSubmitType) {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formActions, isPending] = useActionState(handleSeverDel, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formActions}>
      <input
        type="text"
        id="reviewId"
        value={reviewId}
        name="reviewId"
        hidden
        readOnly
      />
      <input
        type="text"
        id="bookId"
        value={bookId}
        name="bookId"
        hidden
        readOnly
      />
      {isPending ? (
        <div>...</div>
      ) : (
        <button onClick={() => formRef.current?.requestSubmit()}>
          삭제하기
        </button>
      )}
    </form>
  );
}

//requestSubmit 실제로 사용자가 서브밋 메서드는 유효성 이벤트 핸들러를 무시 안함 실제로 사용자가 서브밋을 클릭한 거과 같다
// 가끔은 버튼이 아닌 a태그와 Div 태그로 할 때 이렇게 해
