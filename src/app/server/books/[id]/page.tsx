import ServerBookInfo from "@/components/_serverComponents/ServerBookInfo";

/**
 * prams page에서 없는 params로 접근할 경우 자동으로 404로 던져줌
 */
//레이아웃 세그먼트 옵션
//export const dynamicParams = false;

//동적 경로 페이지를 정적 페이지로 바꿔 주려면 아래 함수명으로 만들고 스트링 타입의 객체를 배열로 만든다.
//빌드 타임에 넥스트 서버가 정적인 값들을 읽어서 정적인 페이지를 빌드 타임에 만든다.

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

//무조건 문자열 값만 들어 온다
//export로 내보낸 함수를 사용하면
//페이지 캐싱을 설정안해도 무조건 정적인 페이지 캐싱으로 설정이 된다.
//getStaticPath랑 비슷 페이지 라우터에서
//3번 뿐만 아니라 4번도 실시간으로 풀라우터캐시로 저장

//여기까지를 라우터 세그먼트 옵션

export default async function page({
  params,
}: {
  params: Promise<{ id: string | string[] }>; //기본적으로 dynamic 페이지롱 생성
}) {
  const { id } = await params;

  return (
    <main className="flex items-center justify-center">
      <ServerBookInfo id={id} />
    </main>
  );
}
/** 폴더명을 [...파라미터명] 캐치 올 세그먼트 (Catch All Segment)로 사용하면 [파라미터명]/[파라미터명]
 * 이렇게 폴더를 만들면 하이드레이션 오류 났던 것을 자유롭게 대응이 가능하다 [...파라미터명] 이렇게
 *
 * 주의점 - 캐치올세그먼트는 파라미터 없는 url 대응할 수 없음
 * 그래서 옵셔널 캐치올 세그먼트라 해서 [[...파라미터]]로 처리 해줄 수 있다.
 */
