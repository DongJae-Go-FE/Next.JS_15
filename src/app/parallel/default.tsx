export default function Default() {
  return <div>@sidebar/children</div>;
}

// 쉽게 생각을 하면 기존 경로 LINK를 통해 접속하면 slot은 현재 상태를 유지합니다 문제는
// 새로고침을 하거나 경로를 통해 들어가면 현재상태가 없습니다
//그래서 Default를 만들어주면 404 이동을 막습니다
//404이동을 막는다 