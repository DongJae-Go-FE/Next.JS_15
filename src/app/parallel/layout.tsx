import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) {
  return (
    <div>
      {sidebar}
      {feed}
      {children}

      <Link href="/parallel">parallel</Link>
      <Link href="/parallel/setting">셋팅</Link>
    </div>
  );
}
