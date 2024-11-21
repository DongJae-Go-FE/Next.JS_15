import SearchBooks from "@/components/_clientComponents/SearchBooks";

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
      <SearchBooks />
    </div>
  );
}
