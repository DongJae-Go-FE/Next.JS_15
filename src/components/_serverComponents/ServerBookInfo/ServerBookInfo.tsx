import Image from "next/image";
import { notFound } from "next/navigation";

import { BookData } from "@/types";
import getFetchRequest from "@/util/getFetchRequest";

export default async function ServerBookInfo({
  id,
  isLoading,
}: {
  id: string | string[];
  isLoading?: boolean;
}) {
  const data = await getFetchRequest<BookData>({
    path: `/book/${id}`,
    method: "GET",
    cache: "force-cache",
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

  if (data?.code === 404) {
    return notFound();
  }

  return (
    <div className="h-[800px] w-[800px] rounded-2xl bg-white p-7 shadow-md">
      <Image
        width={300}
        height={332}
        src={data?.body?.coverImgUrl || ""}
        style={{ width: 300, height: 332 }}
        alt={data?.body?.subTitle || "-"}
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
      <div className="rounded-md bg-gray-300 p-3">
        {data?.body?.description || "-"}
      </div>
    </div>
  );
}
