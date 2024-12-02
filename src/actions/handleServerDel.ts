"use server";

import { expireTag } from "next/cache";

import getFetchRequest from "@/util/getFetchRequest";

const handleSeverDel = async (_: any, formData: FormData) => {
  const reviewId = formData.get("reviewId")?.toString();
  const bookId = formData.get("bookId")?.toString();

  if (!reviewId) {
    return {
      status: false,
      error: "삭제할 리뷰가 없습니다.",
    };
  }

  try {
    await getFetchRequest({
      path: `/review/${reviewId}`,
      method: "DELETE",
    }).then((value) => value);

    expireTag(`review-${bookId}`);

    return {
      status: true,
      error: "",
    };
  } catch (e) {
    return {
      status: false,
      error: `${e}`,
    };
  }
};

export { handleSeverDel };
