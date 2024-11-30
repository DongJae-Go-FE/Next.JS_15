"use server";
// import { revalidatePath } from "next/cache";
import { expireTag } from "next/cache";

import getFetchRequest from "@/util/getFetchRequest";

//useActionState 쓰면 처음에 무조건 state가 온다.
const handleServerSubmit = async (_: any, formData: FormData) => {
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

  if (!bookId || !content || !author) {
    return {
      status: false,
      error: "에러 내용",
    };
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
    //해당 페이지 캐시 재생성 모든 데이터 새로고침 쿼리 리패치 같은
    //풀 라우터 캐시도 삭제임
    //1. 특정 페이지만 재검증
    // revalidatePath(`/book/${bookId}`);

    //2. 특정 경로의 모든 동적 페이지를 재검증
    // revalidatePath(`/book/[id]`,"page");

    //3. 특정 레이아웃을 갖는 모든 페이지 재검증
    // revalidatePath(`/(with-searchbar)`,"layout");

    //4. 모든 데이터를 재검증
    // revalidatePath(`/`,"layout");

    // expirePath(`/book/${bookId}`);
    expireTag(`review-${bookId}`); //해당 api fetch next tag에 지정한 이름으로 재검증가능 가장 겸제적

    return {
      status: true,
      error: "",
    };
  } catch (e) {
    return {
      status: false,
      error: `에러 내용: ${e}`,
    };
  }
};

export { handleServerSubmit };
