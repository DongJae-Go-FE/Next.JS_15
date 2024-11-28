import Button from "@/components/Button";

export default async function page() {
  return (
    <main className="flex items-center justify-center">
      <div className="h-[800px] w-[600px] rounded-2xl bg-white p-4 shadow-md">
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-2 overflow-auto">
          <h2>컴포넌트 렌더링 시점 선택</h2>
          <Button link="/server">서버 사이드</Button>
          <Button color="red" link="/client">
            클라이언트 사이드
          </Button>
        </div>
      </div>
    </main>
  );
}
