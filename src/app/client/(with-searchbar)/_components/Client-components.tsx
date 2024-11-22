"use client";

import { ReactNode } from "react";

// import ServerComponents from "./Server-components";

// export default function ClientComponent() {
//   console.log("클라이언트 컴포넌트");
//   return <ServerComponents />;
// }
//위처럼 import를 하는 것 보다는 props로 전달해주는 게 좋다

export default function ClientComponent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
