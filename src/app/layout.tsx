import { Inter } from "next/font/google";

import Header from "@/components/Header";

import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YABOWLJA",
  description: "볼링공을 고를 땐 야볼자!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <div className="max-w-[1280px] mx-auto">

        {children}
        </div>
      </body>
    </html>
  );
}
