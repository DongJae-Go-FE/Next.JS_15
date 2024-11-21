"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { push } = useRouter();

  return (
    <div className="sticky top-0 mb-9 flex h-12 w-full gap-x-1 bg-white">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded border px-2"
        placeholder="검색어를 입력하세요."
      />
      <button
        className="whitespace-nowrap rounded bg-black px-4 font-medium text-white"
        type="button"
        onClick={() => {
          push(`/search/?q=${search}`);
        }}
      >
        검색
      </button>
    </div>
  );
}
