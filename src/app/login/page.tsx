import { Metadata } from "next";

import LoginForm from "@/components/_clientComponents/LoginForm";

export const metadata: Metadata = {
  title: "LAB 도서 로그인",
  description: "도서 검색 프로젝트 로그인",
  openGraph: {
    title: "LAB 도서 로그인",
    description: "도서 검색 프로젝트 로그인",
    images: ["/thumbnail.png"],
  },
};

export default function Login() {
  return (
    <div className="relative h-[100dvh] w-[100dvw] bg-gray-300">
      <div className="position-center min-h-[400px] w-[400px] rounded-2xl bg-white p-5">
        <h2 className="text-2xl font-bold text-gray-900">서버 로그인</h2>
        <LoginForm />
      </div>
    </div>
  );
}
