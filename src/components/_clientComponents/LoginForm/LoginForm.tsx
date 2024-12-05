"use client";

import Link from "next/link";
import { doCredentialLogin } from "@/actions/loginActions";

// import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const liStyle = "flex w-full flex-col gap-y-1";
  const labelStyle = "font-bold";
  const inputStyle = "h-12 border rounded-md px-3";

  const router = useRouter();
  // const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);

      if (!response) {
        alert("계정정보를 확인하세요");
        // setError(response.error.message);
      } else {
        router.push("/server");
      }
    } catch (e) {
      console.error(e);
      // setError("계정정보가 틀립니다 확인해보세요");
    }
  }

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
