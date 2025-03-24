import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "NTQ Korea | IT 컨설팅 & 소프트웨어 개발 | 홈페이지",
  description: "소프트웨어 개발 및 기술 컨설팅 서비스 , 오프쇼어 제공합니다.",
  icons: 'https://ntq.com.vn/wp-content/uploads/2025/01/ntq-favicon.png.png',
  alternates: {
    canonical: "https://ntq.com.vn/ko/",
  },
  openGraph: {
    title: "NTQ Korea | IT 컨설팅 & 소프트웨어 개발 | 홈페이지",
    description: "소프트웨어 개발 및 기술 컨설팅 서비스 , 오프쇼어 제공합니다.",
    url: "https://ntq.com.vn/ko/",
    siteName: "NTQ Korea",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "https://ntq.com.vn/wp-content/themes/ntq_branding/assets/images/ProductOverview/product-hero.webp",
        width: 1200,
        height: 630,
        alt: "NTQ Korea 홈페이지",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
      <Nav />
        {children}
      <Footer />
      </body>
    </html>
  );
}
