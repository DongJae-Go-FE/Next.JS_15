export default function Page() {
  return <div>parallel/setting</div>;
}

//Link 태그로만 이동함
//url입력해서 하는 거 미작동 즉 브라우저에서 클라이언트 사이드 시점에 이동했을 때만 가능
//그낭 parallel/setting 처음 접속했을 때는 모름, 새로고침하거나 왜? 초기값이 없으니
//해당하는 슬롯의 이전값을 모르기 때문에