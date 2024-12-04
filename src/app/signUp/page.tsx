import { Metadata } from "next";

import SingUpForm from "@/components/_clientComponents/SingUpForm";

export const metadata: Metadata = {
  title: "LAB 도서 회원가입",
  description: "도서 검색 프로젝트 회원가입",
  openGraph: {
    title: "LAB 도서 회원가입",
    description: "도서 검색 프로젝트 회원가입",
    images: ["/thumbnail.png"],
  },
};

export default function SignUp() {
  return (
    <div className="relative h-[100dvh] w-[100dvw] bg-gray-300">
      <div className="position-center min-h-[400px] w-[400px] rounded-2xl bg-white p-5">
        <h2 className="text-2xl font-bold text-gray-900">서버 회원 가입</h2>
        <SingUpForm />
      </div>
    </div>
  );
}
