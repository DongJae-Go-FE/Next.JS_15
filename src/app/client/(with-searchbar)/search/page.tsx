import { Suspense } from "react";

import ClientSearchBooks from "@/components/_clientComponents/ClientSearchBooks";
import SuspenseSpinner from "@/components/SuspenseSpinner";

//리액트 서버 컴포넌트이기 때문 async를 붙일 수 있다
export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div>
      <section>
        <h2>검색 결과</h2>
      </section>
      <Suspense
        key={q} //이값이 변경 될 때 마다 키캆이 바뀔 때마다 새로 그려라
        fallback={<SuspenseSpinner />}
      >
        <ClientSearchBooks query={q || ""} />
      </Suspense>
    </div>
  );
}
