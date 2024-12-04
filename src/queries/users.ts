import { User } from "@/model/user-model";

export interface UserType {
  name: string;
  email: string;
  password: string;
}

export async function CreateUser(userData: UserType) {
  try {
    await User.create(userData);
  } catch (e) {
    throw new Error(`${e}`);
  }
}
