import type { Metadata } from "next";
import AuthProvider from "@/components/Provider/AuthProvider";

import localFont from "next/font/local";
import "./globals.css";

export const pretendard = localFont({
  src: "fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "next15 auth db",
  description: "next15, auth, modoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
