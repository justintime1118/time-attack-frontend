import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./_providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Udemy 프론트엔드 타임어택",
  description: "프론트엔드 타임어택",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
