//로딩으로 tsx 파일을 만들면 자동으로 스트리밍으로 해주고 대체 ui 설정
import Spinner from "@/components/Spinner";

export default function Loading() {
  return <Spinner />;
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