"use client";

import Button from "../../Button";
import Input from "../../Input";
import Textarea from "../../Textarea/Textarea";

export default function ClientEditor() {
  const handleSubmit = async () => {
    console.log("서버 액션");
  };

  return (
    <section className="mt-5 w-full">
      <form action={handleSubmit}>
        <ul className="flex flex-col gap-y-2">
          <li>
            <Input type="text" name="name" id="name" placeholder="작성자" />
          </li>
          <li>
            <Textarea
              name="content"
              id="content"
              placeholder="내용을 작성해주세요."
            />
          </li>
        </ul>
        <div className="mt-3 flex w-full justify-end">
          <Button type="submit">작성하기</Button>
        </div>
      </form>
    </section>
  );
}
