import Link from "next/link";
import Image from "next/image";

import { BookData } from "@/types";

export interface BookItemType extends BookData {
  isLoading?: boolean;
  side?: "server" | "client";
}

export default function BookItem({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
  isLoading,
  side,
}: BookItemType) {
  if (isLoading) {
    return (
      <div className="flex w-full animate-pulse gap-x-2 border-b border-gray-300 p-3">
        <div className="skeleton-basic h-[133px] w-[100px]" />
        <div className="w-[calc(100% - 108px)] flex h-[133px] flex-col">
          <div className="skeleton-basic h-6 w-[150px]" />
          <div className="skeleton-basic mt-1 h-6 w-[280px]" />
          <div className="skeleton-basic mt-4 h-6 w-[200px]" />
        </div>
      </div>
    );
  }

  return (
    <article className="w-full border-b border-gray-300 p-3">
      <Link
        href={`/${side}/books/${id}`}
        scroll={false}
        className="flex w-full gap-x-2"
      >
        <div className="w-[100px]">
          <Image
            width={100}
            height={133}
            style={{ width: 100, height: 133 }}
            src={coverImgUrl}
            alt={subTitle}
            priority
          />
        </div>
        <div className="flex w-[calc(100%-108px)] flex-col">
          <h3
            className="max-w-[95%] truncate font-bold text-black"
            title={title}
          >
            {title}
          </h3>
          <p className="max-w-[95%] truncate text-black" title={subTitle}>
            {subTitle}
          </p>
          <p className="mt-4 text-gray-400">
            {author} | {publisher}
          </p>
        </div>
      </Link>
    </article>
  );
}
