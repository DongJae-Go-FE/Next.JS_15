import { auth } from "@/auth";
import { doLogout } from "@/actions/loginActions";

export default async function MyInfo() {
  const sessions = await auth();

  return (
    <div className="fixed bottom-16 right-3 h-32 w-96 rounded bg-white p-4 shadow-md">
      <h2 className="flex w-full items-center justify-between">
        내정보
        <button className="text-gray-400" onClick={doLogout}>
          로그아웃
        </button>
      </h2>
      <ul>
        <li>이메일:{sessions?.user?.email}</li>
        <li>이름:{sessions?.user?.name}</li>
      </ul>
    </div>
  );
}
