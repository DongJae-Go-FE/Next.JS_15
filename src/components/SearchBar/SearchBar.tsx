"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { push } = useRouter();

  return (
    <div className="flex h-12 w-full gap-x-1 mb-9">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded border px-2 w-full"
        placeholder="검색어를 입력하세요."
      />
      <button
        className="rounded bg-black px-4 font-medium text-white whitespace-nowrap"
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
