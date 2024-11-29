import Image from "next/image";

import { BookData } from "@/types";
import getFetchRequest from "@/util/getFetchRequest";
import ServerEditor from "../ServerEditor";
import ServerReview from "../ServerReview";

export default async function ServerBookInfo({ id }: { id: string }) {
  const data = await getFetchRequest<BookData>({
    path: `/book/${id}`,
    method: "GET",
    cache: "force-cache",
  });

  return (
    <div className="min-h-[800px] w-[800px] rounded-2xl bg-white p-7 shadow-md">
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
      <div className="max-h-[132px] overflow-auto rounded-md bg-gray-300 p-3">
        {data?.body?.description || "-"}
      </div>
      <ServerEditor bookId={id} />
      <ServerReview bookId={id} />
    </div>
  );
}
