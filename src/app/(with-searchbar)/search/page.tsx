import ClientComponent from "../_components/Client-components";

//리액트 서버 컴포넌트이기 때문 async를 붙일 수 있다
export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div>
      검색페이지:{q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
