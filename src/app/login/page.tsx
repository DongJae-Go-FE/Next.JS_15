export default async function Login() {
  const liStyle = "flex w-full flex-col gap-y-1";
  const lableStyle = "font-bold";
  const inputStyle = "h-12 border rounded-md px-3";

  return (
    <div className="relative h-[100dvh] w-[100dvw] bg-gray-300">
      <div className="postion-center min-h-[400px] w-[400px] rounded-2xl bg-white p-5">
        <h2 className="text-2xl font-bold text-gray-900">서버 로그인</h2>
        <form action="">
          <ul className="mb-12 mt-6 flex flex-col gap-y-6">
            <li className={liStyle}>
              <label htmlFor="uesrId" className={lableStyle}>
                아이디
              </label>
              <input
                type="text"
                className={inputStyle}
                placeholder="아이디를 입력하세요."
                id="uesrId"
                autoComplete="username"
              />
            </li>
            <li className={liStyle}>
              <label htmlFor="userPw" className={lableStyle}>
                비밀번호
              </label>
              <input
                type="password"
                id="userPw"
                className={inputStyle}
                placeholder="비밀번호를 입력하세요."
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
          <button
            type="button"
            className="h-14 w-full rounded border bg-white font-bold text-black"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
