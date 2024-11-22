import queryString from "querystring";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

const base_url = process.env.NEXT_PUBLIC_BACKEND_API as string;

const getFetchRequest = async <Response, Params = undefined>({
  method = "GET",
  ...config
}: {
  path?: string;
  method?: Method;
  params?: Params;
  body?: Params;
  headers?: HeadersInit;
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
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json;charset=utf-8",
        ...config?.headers,
      },
      body: JSON.stringify(config.body),
    });

    const responseData = response.json();

    if (!response.ok) {
      throw `[${response.status}] 에러가 발생했습니다.`;
    }

    return responseData as Response;
  } catch (e) {
    alert(e);
  }
};

export default getFetchRequest;
