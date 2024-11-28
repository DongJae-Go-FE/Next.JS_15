import { Suspense } from "react";
import ServerSearchBooks from "@/components/_serverComponents/ServerSearchBooks";
import SuspenseSpinner from "@/components/SuspenseSpinner";

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
        <ServerSearchBooks query={q || ""} />
      </Suspense>
    </div>
  );
}

//서스펜트로 컴포넌트를 감싸면 해당 컴포넌트는 스트리밍한다
