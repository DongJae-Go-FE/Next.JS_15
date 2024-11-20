import ClientComponent from "./_components/Client-components";
import ServerComponents from "./_components/Server-components";

export default function Home() {
  console.log("홈");
  return (
    <div>
      <main>
        메인페이지
        <ClientComponent>
          <ServerComponents />
        </ClientComponent>
      </main>
    </div>
  );
}

//() 소괄호 폴더명으로 이렇게 감싸는 것을 라우트 그룹 Route Group이라고 함
//URL 경로에는 영향을 주지 않고 layout만 그룹으로 하기 용이 즉 (라우트명)은 URL에 포함X

// 앱라우터에서 디폴트로 서버 컴포넌트
//서버 컴포넌트에서는 브라우저에서 안 실행하기 때문에 콘솔창에 console.log()안찍힘


// 이렇게 children으로 전달한 서버 컴포넌트는 클라이언트 컴포넌트로 변환 안함