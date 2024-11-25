import { notFound } from "next/navigation";
import queryString from "querystring";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

const base_url = process.env.NEXT_PUBLIC_BACKEND_API as string;

const getFetchRequest = async <Response, Params = undefined>({
  method = "GET",
  cache,
  next,
  ...config
}: {
  method?: Method;
  cache?: "no-store" | "force-cache";
  path?: string;
  params?: Params;
  next?: NextFetchRequestConfig;
  headers?: HeadersInit;
  body?: Params;
}) => {
  try {
    let params = "";

    if (config?.params) {
      const filtered = { ...config.params };
      Object.entries(filtered).forEach(([key, value]) => {
        if (value === undefined) {
          delete filtered[key as keyof typeof filtered];
        }
      });
      params = `?${queryString.stringify(filtered)}`;
    }

    const response = await fetch(`${base_url}${config.path}${params}`, {
      method,
      /**
      next cache options
      - no-store : 저장을 하지 않는다. 아무런 캐싱 미동작, 무조건 페칭 발생 // 기본값
      - force-cache : no-store와 반대, // 데이터 캐시 안에 이미 값이 있으면 데이터 캐시에서 다시 보낸다. // 한번 호출 후 다시 부르지 않음
      */
      // cache: "force-cache",

      //next: {revalidate: 3} - 특정 시간을 주기로 캐시를 업데이트 함, 그니깐 캐싱한 데이터를 3초 주기로 리페치를 한다.
      //접속 요청을 보내면 데이터캐시는 기존에 있던 stale(상한) 데이터라도 빠르게 보내주고 백엔드 서버로 다시 불러와서
      //최신 데이터를 다시 캐싱해서 다시 보낸다.
      //next: {tags: ["a"]} 요청이 들어왔을 때 데이터를 최신화 함
      next,
      cache,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json;charset=utf-8",
        ...config?.headers,
      },
      body: JSON.stringify(config.body),
    });

    const responseData = response.json();

    if (!response.ok) {
      if (response.status === 404) {
        notFound();
      }
      throw `[${response.status}] 에러가 발생했습니다.`;
    }

    return responseData as Response;
  } catch (e) {
    console.log(e);
  }
};

export default getFetchRequest;
