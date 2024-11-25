import Link from "next/link";

export default async function page() {
  const btnStyle = "inline-flex h-12 items-center rounded";

  return (
    <main className="flex items-center justify-center">
      <div className="h-[800px] w-[600px] rounded-2xl bg-white p-4 shadow-md">
        <div className="flex h-full w-full flex-col items-center justify-center overflow-auto gap-y-2">
          <h2>컴포넌트 렌더링 시점 선택</h2>
          <Link
            className={`${btnStyle} bg-black px-4 text-white`}
            href="/server"
          >
            서버 사이드
          </Link>
          <Link
            className={`${btnStyle} bg-red-500 px-4 text-white`}
            href="/client"
          >
            클라이언트 사이드
          </Link>
        </div>
      </div>
    </main>
  );
}
