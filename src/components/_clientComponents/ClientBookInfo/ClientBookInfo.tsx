"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { BookData } from "@/types";
import getFetchRequest from "@/util/getFetchRequest";

export default function ClientBookInfo({ id }: { id: string | string[] }) {
  const { data, isLoading } = useQuery({
    queryKey: ["bookInfo"],
    queryFn: () =>
      getFetchRequest<BookData>({
        path: `/book/${id}`,
      }),
  });

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

  return (
    <div className="h-[800px] w-[800px] rounded-2xl bg-white p-7 shadow-md">
      <Image
        width={300}
        height={332}
        src={data?.coverImgUrl || ""}
        style={{ width: 300, height: 332 }}
        alt={data?.subTitle || ""}
        priority
        className="m-auto"
      />
      <h3 className="mb-1 mt-7 text-lg font-bold">{data?.title || "-"}</h3>
      <p className="my-2 text-gray-500">{data?.subTitle || "-"}</p>
      <p className="my-2 text-gray-500">
        {data?.author || "-"} | {data?.publisher || "-"}
      </p>
      <div className="rounded-md bg-gray-300 p-3">
        {data?.description || "-"}
      </div>
    </div>
  );
}
