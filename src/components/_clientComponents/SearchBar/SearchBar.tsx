"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { useState, useEffect, KeyboardEvent } from "react";

export default function SearchBar({ side }: { side: "server" | "client" }) {
  const searchParams = useSearchParams();
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
