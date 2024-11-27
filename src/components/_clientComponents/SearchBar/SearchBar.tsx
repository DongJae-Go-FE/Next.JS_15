"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { useState, useEffect, KeyboardEvent } from "react";

// import useDebounce from "@/Hook/useDebounce";

export default function SearchBar({ side }: { side: "server" | "client" }) {
  const searchParams = useSearchParams(); // 빌드 타임에 인덱스 페이지를 정적으로 생성하다가
  //현재 브라우저에서 쿼리 스트링의 값을 가져오는 역활을 하는데 빌드 타임에는 쿼리 스트링이 없다.
  //검색어 같은 거 잖아 빌드
  //빌드 타임에 생성하는 클라이언트 컴포넌트에 useSearchParams 같이 빌드타임에 절대 값을 알 수 없는
  // 이런 훅을 사용하려고 하면 빌드 중에 오류가 난다.
  // 비동기로 동작한다.
  const pathname = usePathname();
  const { push } = useRouter();

  const [search, setSearch] = useState("");

  const queryString = searchParams.get("q");

  useEffect(() => {
    if (queryString) setSearch(queryString);
  }, [queryString]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      push(`/${side}/search/?q=${search}`);
    }
  };

  const handleReset = () => {
    setSearch("");
    push(`/${side}/search`);
  };

  //추천 검색어에 넣자
  // const debounceSearch = useDebounce<string>({ value: search });
  // console.log(debounceSearch);

  return (
    <div className="sticky top-0 mb-9 flex h-12 w-full gap-x-1 bg-white">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded border px-2"
        placeholder="검색어를 입력하세요."
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      <button
        className="whitespace-nowrap rounded bg-black px-4 font-medium text-white disabled:bg-gray-300"
        type="button"
        disabled={!search || queryString === search}
        onClick={() => {
          if (!search || queryString === search) {
            return;
          } else {
            push(`/${side}/search/?q=${search}`);
          }
        }}
      >
        검색
      </button>
      {pathname.includes("search") && (
        <button
          className="whitespace-nowrap rounded bg-red-500 px-4 font-medium text-white disabled:bg-gray-300"
          type="button"
          onClick={handleReset}
        >
          초기화
        </button>
      )}
    </div>
  );
}
