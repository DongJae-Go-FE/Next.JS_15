import { Metadata } from "next";

import { Suspense } from "react";
import ServerSearchBooks from "@/components/_serverComponents/ServerSearchBooks";
import SuspenseSpinner from "@/components/SuspenseSpinner";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  //현재 페이지 메타 데이터를 동적으로 생성하는 역할

  const { q } = await searchParams;

  return {
    title: `${q}: LAB 도서 리스트 검색 결과`,
    description: `${q}: LAB 도서 리스트 검색 결과입니다.`,
    openGraph: {
      title: `${q}: LAB 도서 리스트 검색 결과`,
      description: `${q}: LAB 도서 리스트 검색 결과입니다.`,
      images: ["/thumbnail.png"],
    },
  };
}

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
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
