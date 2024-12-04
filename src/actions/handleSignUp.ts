"use server";

const handleSignUp = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const response = await fetch("http://localhost:9090/api/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      console.error("회원가입 실패:", response.statusText);
    }
  } catch (e) {
    console.error(e);
  }
};

export { handleSignUp };
