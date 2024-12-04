"use client";

import { useRouter } from "next/navigation";
import { TEXT_SIGN_UP, TEXT_SIGN_UP_OK } from "@/const/const";

export default function SingUpForm() {
  const liStyle = "flex w-full flex-col gap-y-1";
  const labelStyle = "font-bold";
  const inputStyle = "h-12 border rounded-md px-3";

  const { push } = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (confirm(TEXT_SIGN_UP)) {
      try {
        const formData = new FormData(event.currentTarget);

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");

        const response = await fetch(`/api/auth/register`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        if (response.status === 201) {
          alert(TEXT_SIGN_UP_OK);
          push("/login");
        }
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
        } else {
          console.error("알 수 없는 오류가 발생했습니다.");
        }
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <ul className="mb-12 mt-6 flex flex-col gap-y-6">
        <li className={liStyle}>
          <label htmlFor="name" className={labelStyle}>
            이름
          </label>
          <input
            type="text"
            className={inputStyle}
            placeholder="사용할 이름을 입력하세요."
            id="name"
            name="name"
            autoComplete="name"
          />
        </li>
        <li className={liStyle}>
          <label htmlFor="email" className={labelStyle}>
            이메일
          </label>
          <input
            type="email"
            className={inputStyle}
            placeholder="이메일을 입력하세요."
            id="email"
            name="email"
            autoComplete="email"
          />
        </li>
        <li className={liStyle}>
          <label htmlFor="password" className={labelStyle}>
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            className={inputStyle}
            placeholder="비밀번호를 입력하세요."
            name="password"
            autoComplete="current-password"
          />
        </li>
      </ul>
      <button
        type="submit"
        className="mb-2 h-14 w-full rounded bg-black font-bold text-white"
      >
        회원가입 하기
      </button>
    </form>
  );
}
