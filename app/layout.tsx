import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyBlog - AI应用开发平台",
  description: "企业级的AI应用开发平台，快速构建AI智能体",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="page-wrapper">
          <Header />
          <div className="page-background">
            <div className="grid-overlay"></div>
            <div className="gradient-overlay"></div>
          </div>
          <main className="main-content">
            <div className="container">
              <div className="content-container">
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
