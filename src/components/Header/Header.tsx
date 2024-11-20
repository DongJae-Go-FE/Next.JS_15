import Link from "next/link";

export default function Header() {
  return (
    <header className="h-14 w-full">
      <nav className="flex h-full w-full items-center">
        <ul className="flex gap-x-2">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/search">seach</Link>
          </li>
          <li>
            <Link href="/books/1">books/1</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
