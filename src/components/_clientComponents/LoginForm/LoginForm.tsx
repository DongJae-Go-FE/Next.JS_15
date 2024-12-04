"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { handleLogin } from "@/actions/handleLogin";

export default function LoginForm() {
  const liStyle = "flex w-full flex-col gap-y-1";
  const labelStyle = "font-bold";
  const inputStyle = "h-12 border rounded-md px-3";

  const { push } = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await handleLogin(formData);

      if (response.error) {
        alert("에러입니다!");
      } else {
        push("/server");
      }
    } catch (error) {
      console.error(error);
      alert("계정확인 필요");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <ul className="mb-12 mt-6 flex flex-col gap-y-6">
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
        로그인
      </button>
      <Link
        type="button"
        className="block h-14 w-full content-center rounded border bg-white text-center font-bold text-black"
        href="/signUp"
      >
        회원가입
      </Link>
    </form>
  );
}
