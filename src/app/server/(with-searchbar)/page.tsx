import ServerRecommendBooks from "@/components/_serverComponents/ServerRecommendBooks";
import ServerRegisteredAllBooks from "@/components/_serverComponents/ServerRegisteredAllBooks";

import SuspenseSkeleton from "@/components/SuspenseSkeleton";

export const dynamic = "force-dynamic";
//특정 페이지의 유형을 강제로 Static, Dynamic 페이지로 설정
//1. auto - 기본값, 아무것도 강제하지 않음, 생략해도 무방
//2. force-dynamic - 페이지로 강제로 Dynamic 페이지로 설정
//3. force-state - 페이지를 강제로 Static페이졸 설정
//4. error - 페이지를 강제로 static 페이지 설정(static으로 설정하면 안되는 이유가 있다면 빌드 오류)
//정말 특별한 상황 아니면 권유하지 않는다.

export default async function Home() {
  return (
    <div>
      <section className="mb-20">
        <h2>지금 추천하는 도서</h2>
        <SuspenseSkeleton>
          <ServerRecommendBooks />
        </SuspenseSkeleton>
      </section>
      <section>
        <h2>등록된 모든 도서</h2>
        <SuspenseSkeleton>
          <ServerRegisteredAllBooks />
        </SuspenseSkeleton>
      </section>
    </div>
  );
}

//() 소괄호 폴더명으로 이렇게 감싸는 것을 라우트 그룹 Route Group이라고 함
//URL 경로에는 영향을 주지 않고 layout만 그룹으로 하기 용이 즉 (라우트명)은 URL에 포함X

// 앱라우터에서 디폴트로 서버 컴포넌트
//서버 컴포넌트에서는 브라우저에서 안 실행하기 때문에 콘솔창에 console.log()안찍힘

// 이렇게 children으로 전달한 서버 컴포넌트는 클라이언트 컴포넌트로 변환 안함
