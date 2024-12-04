"use client";

import { useRouter } from "next/navigation";

import { handleSignUp } from "@/actions/handleSignUp";

export default function SingUpForm() {
  const liStyle = "flex w-full flex-col gap-y-1";
  const labelStyle = "font-bold";
  const inputStyle = "h-12 border rounded-md px-3";

  const { push } = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await handleSignUp(formData);

      if (!response?.ok) {
        alert("에러입니다!");
      } else {
        push("/server");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
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
