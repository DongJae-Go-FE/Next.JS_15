"use client";

import Image from "next/image";
import Mock from "@/mock/books.json";
import { BookData } from "@/types";

export default function ClientBookInfo({
  id,
  isLoading,
}: {
  id: string;
  isLoading?: boolean;
}) {
  if (isLoading) {
    return (
      <div className="h-[800px] w-[800px] animate-pulse rounded-2xl bg-white p-7 shadow-md">
        <div className="m-auto h-[322px] w-[300px] rounded-md bg-gray-200" />

        <div className="w-[100px]rounded-md mb-1 mt-7 h-7 bg-gray-200" />
        <div className="my-2 h-6 w-[130px] rounded-md bg-gray-200" />
        <div className="my-2 h-6 w-[100px] rounded-md bg-gray-200" />
        <div className="h-[132px] w-full rounded-md bg-gray-200" />
      </div>
    );
  }

  const data = Mock.find((value) => value.id === Number(id)) as BookData;

  return (
    <div className="h-[800px] w-[800px] rounded-2xl bg-white p-7 shadow-md">
      <Image
        width={300}
        height={332}
        src={data.coverImgUrl}
        style={{ width: 300, height: 332 }}
        alt={data.subTitle}
        priority
        className="m-auto"
      />
      <h3 className="mb-1 mt-7 text-lg font-bold">{data.title}</h3>
      <p className="my-2 text-gray-500">{data.subTitle}</p>
      <p className="my-2 text-gray-500">
        {data.author} | {data.publisher}
      </p>
      <div className="rounded-md bg-gray-300 p-3">{data.description}</div>
    </div>
  );
}
