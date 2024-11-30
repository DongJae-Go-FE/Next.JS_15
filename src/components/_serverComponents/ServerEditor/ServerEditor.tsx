"use client";

import { useActionState, useEffect } from "react";
//폼태그의 상태를 핸들링 하는 훅
import Button from "../../Button";
import Input from "../../Input";
import Textarea from "../../Textarea/Textarea";

import { handleServerSubmit } from "@/actions/handleServerSubmit";

//특히 폼태그를 하는 것들은 서버 보다는 클라이언트 컴포넌트로 추천한다.

export default function ServerEditor({ bookId }: { bookId: string }) {
  //상태, 폼액션, 현재 폼의 로딩 상태
  const [state, formAction, isPending] = useActionState(
    handleServerSubmit, // 서버액션
    null, // 초기상태
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section className="mt-5 w-full">
      <form action={formAction}>
        <ul className="flex flex-col gap-y-2">
          <Input
            type="text"
            value={bookId}
            name="bookId"
            id="bookId"
            hidden
            readOnly
          />
          {/** hidden으로 처리 하고 onChange 없이 value만 주면 next에서 오류로 확인할 수 있음 그럴 경우
           * readOnly를 추가한다 그냥 hidden은 이렇게 처리해
           */}
          <li>
            <Input
              type="text"
              name="author"
              id="author"
              placeholder="작성자"
              disabled={isPending}
              required
            />
          </li>
          <li>
            <Textarea
              name="content"
              id="content"
              placeholder="내용을 작성해주세요."
              disabled={isPending}
              required
            />
          </li>
        </ul>
        <div className="mt-3 flex w-full justify-end">
          <Button disabled={isPending} type="submit">
            {isPending ? "제출중.." : "진행하기"}
          </Button>
        </div>
      </form>
    </section>
  );
}
