import Link from "next/link";

export default function Header() {
  const fontStyle = "font-medium text-black";

  return (
    <header className="fixed left-0 top-0 z-[1001] flex h-14 w-full items-center gap-x-2 bg-white px-6">
      <h1 className="w-16">
        <Link href="/">🐬</Link>
      </h1>
      <nav className="flex h-full w-full items-center">
        <ul className="flex gap-x-4">
          <li>
            <Link href="/" className={fontStyle}>
              메인
            </Link>
          </li>
          <li>
            <Link href="/search" className={fontStyle}>
              검색
            </Link>
          </li>
          <li>
            <Link href="/books/1" className={fontStyle}>
              books/1
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
