import ClientBookInfo from "@/components/_clientComponents/ClientBookInfo";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;

  return (
    <main className="flex items-center justify-center">
      <ClientBookInfo id={id} />
    </main>
  );
}
/** 폴더명을 [...파라미터명] 캐치 올 세그먼트 (Catch All Segment)로 사용하면 [파라미터명]/[파라미터명]
 * 이렇게 폴더를 만들면 하이드레이션 오류 났던 것을 자유롭게 대응이 가능하다 [...파라미터명] 이렇게
 *
 * 주의점 - 캐치올세그먼트는 파라미터 없는 url 대응할 수 없음
 * 그래서 옵셔널 캐치올 세그먼트라 해서 [[...파라미터]]로 처리 해줄 수 있다.
 */
