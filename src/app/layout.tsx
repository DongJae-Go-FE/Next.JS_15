import type { Metadata } from "next";
import AuthProvider from "@/components/_clientComponents/Provider/AuthProvider";

import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";
import QueryProvider from "@/components/_clientComponents/QueryProvider/QueryProvider";

const pretendard = localFont({
  src: "fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "next15 auth db",
  description: "next15, auth, modoDB",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <QueryProvider>
          <AuthProvider>
            <Header />
            {children}
            {modal}
          </AuthProvider>
        </QueryProvider>
        <div id="modal"></div>
      </body>
    </html>
  );
}
