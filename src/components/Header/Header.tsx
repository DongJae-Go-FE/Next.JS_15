"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  if (pathName.includes("login")) {
    return null;
  }

  if (pathName.includes("signUp")) {
    return null;
  }

  const fontStyle = "font-medium text-black";

  return (
    <header className="fixed left-0 top-0 z-[1001] flex h-14 w-full items-center gap-x-2 bg-white px-6">
      <h1 className="w-16">
        <Link href="/server">🐬</Link>
      </h1>
      <nav className="flex h-full w-full items-center">
        <ul className="flex gap-x-4">
          <li>
            <Link href="/server" className={fontStyle}>
              서버 컴포넌트 메인
            </Link>
          </li>
          <li>
            <Link href="/server/search" className={fontStyle}>
              서버 컴포넌트 검색
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
