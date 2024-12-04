"use server";

import { doCredentialLogin } from "./loginActions";

export const handleLogin = async (formData: FormData) => {
  try {
    const response = await doCredentialLogin(formData);

    return response;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
