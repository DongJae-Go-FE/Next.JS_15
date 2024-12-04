"use server";

import { signIn, signOut } from "@/auth";

export async function doLogin(formData: FormData) {
  const action = formData.get("action");
  if (action) {
    await signIn(action as string, { redirectTo: "/server" });
  } else {
    throw new Error("Action is required");
  }
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(formData: FormData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    return response;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
