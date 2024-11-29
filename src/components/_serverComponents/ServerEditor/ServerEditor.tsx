import Button from "../../Button";
import Input from "../../Input";
import Textarea from "../../Textarea/Textarea";
import { handleServerSubmit } from "@/actions/handleServerSubmit";

export default function ServerEditor({ bookId }: { bookId: string }) {
  return (
    <section className="mt-5 w-full">
      <form action={handleServerSubmit}>
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
              required
            />
          </li>
          <li>
            <Textarea
              name="content"
              id="content"
              placeholder="내용을 작성해주세요."
              required
            />
          </li>
        </ul>
        <div className="mt-3 flex w-full justify-end">
          <Button type="submit">작성하기</Button>
        </div>
      </form>
    </section>
  );
}
