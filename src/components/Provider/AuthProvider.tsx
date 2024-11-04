"use client";

import { createContext } from "react";

export const AuthContext = createContext<{ user: "" | null }>({
  user: null,
});

const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AuthContext.Provider value={{ user: "" }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
