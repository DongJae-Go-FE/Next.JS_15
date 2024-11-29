"use client";

import Image from "next/image";
import { notFound } from "next/navigation";

import { useQuery } from "@tanstack/react-query";

import { BookData } from "@/types";
import getFetchRequest from "@/util/getFetchRequest";
import ClientEditor from "../ClientEditor";

export default function ClientBookInfo({ id }: { id: string | string[] }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["bookInfo", id],
    queryFn: () =>
      getFetchRequest<BookData>({
        path: `/book/${id}`,
      }),
  });

  if (isLoading) {
    return (
      <div className="min-h-[800px] w-[800px] animate-pulse rounded-2xl bg-white p-7 shadow-md">
        <div className="m-auto h-[322px] w-[300px] rounded-md bg-gray-200" />
        <div className="w-[100px]rounded-md mb-1 mt-7 h-7 bg-gray-200" />
        <div className="my-2 h-6 w-[130px] rounded-md bg-gray-200" />
        <div className="my-2 h-6 w-[100px] rounded-md bg-gray-200" />
        <div className="h-[132px] w-full rounded-md bg-gray-200" />
        <div className="mt-5 h-10 w-full rounded-md bg-gray-200" />
        <div className="mt-3 h-[90px] w-full rounded-md bg-gray-200" />
        <div className="mt-3 flex h-12 w-full justify-end">
          <div className="h-12 w-[87px] rounded-md bg-gray-200" />
        </div>
      </div>
    );
  }
  if (error?.message.includes("404")) {
    return notFound();
  }

  return (
    <div className="min-h-[800px] w-[800px] rounded-2xl bg-white p-7 shadow-md">
      <Image
        width={300}
        height={332}
        src={data?.body?.coverImgUrl || ""}
        style={{ width: 300, height: 332 }}
        alt={data?.body?.subTitle || ""}
        priority
        className="m-auto"
      />
      <h3 className="mb-1 mt-7 text-lg font-bold">
        {data?.body?.title || "-"}
      </h3>
      <p className="my-2 text-gray-500">{data?.body?.subTitle || "-"}</p>
      <p className="my-2 text-gray-500">
        {data?.body?.author || "-"} | {data?.body?.publisher || "-"}
      </p>
      <div className="max-h-[132px] overflow-auto rounded-md bg-gray-300 p-3">
        {data?.body?.description || "-"}
      </div>
      <ClientEditor />
    </div>
  );
}
