import Button from "../../Button";
import Input from "../../Input";
import Textarea from "../../Textarea/Textarea";
import getFetchRequest from "@/util/getFetchRequest";

export default function ServerEditor({ bookId }: { bookId: string }) {
  //이거 분리 해보기, 최상단 use server
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const bookId = formData.get("bookId")?.toString();
    const content = formData.get("content")?.toString();
    const author = formData.get("author")?.toString();
    //FormDataEntryValue 스트링이나 파일 타입을 뜻함
    //파일 타입은 필요하지 않는 이상 스트링만 필요하겠지? 변환하는게 좋아

    //굳이 서버액션 하는 이유
    //코드가 간결함 ,api를 이용해서 만들다 보면 파일 추가하고 등등 부가적인 작업이 많아진다.
    //단순한 기능에 경우에는 좋겠지? 함수하나만으로 api를 할 수 있음
    //오직 서버측에서만 사용 클라이언트에서는 호출만 가능 하기 때문에 코드를 전달 받지 않음
    //보안상에서 유용
    //console.log(content, author);

    if (!content || !author) {
      return;
    }
    try {
      await getFetchRequest({
        path: `/review`,
        method: "POST",
        body: {
          bookId,
          content,
          author,
        },
      });
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return (
    <section className="mt-5 w-full">
      <form action={handleSubmit}>
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
              id="name"
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
