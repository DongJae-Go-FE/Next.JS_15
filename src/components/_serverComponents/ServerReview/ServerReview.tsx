import { BookReview } from "@/types";
import getFetchRequest from "@/util/getFetchRequest";
import ServerDeleteBtn from "../ServerDeleteBtn/ServerDeleteBtn";

export default async function ServerReview({ bookId }: { bookId: string }) {
  const data = await getFetchRequest<BookReview[]>({
    path: `/review/book/${bookId}`,
    method: "GET",
    cache: "force-cache",
    next: { tags: [`review-${bookId}`] },
  });

  return (
    <ul className="mt-9 flex w-full flex-col gap-y-2">
      {data?.body?.map(({ id, author, content, createdAt }) => {
        return (
          <li key={id} className="flex w-full flex-col gap-y-1">
            <div className="flex justify-between">
              <span className="flex gap-x-1">
                <b>{author}</b>
                <span className="text-gray-400">
                  ({new Date(createdAt).toLocaleString()})
                </span>
              </span>
              <ServerDeleteBtn reviewId={id} bookId={bookId} />
            </div>
            <div>{content}</div>
          </li>
        );
      })}
    </ul>
  );
}
