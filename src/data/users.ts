const users = [
  {
    email: "test1@naver.com",
    password: "password",
  },
  {
    email: "test2@naver.com",
    password: "password",
  },
  {
    email: "test3@naver.com",
    password: "password",
  },
];

export const getUserByEmail = (email?: string | unknown) => {
  const found = users.find((user) => user.email === email);
  return found;
};
