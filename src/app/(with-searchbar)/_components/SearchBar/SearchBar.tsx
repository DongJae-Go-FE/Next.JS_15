"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { push } = useRouter();

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
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
