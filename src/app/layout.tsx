import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '夏建洪 | 美区 TikTok 拍剪 & AIGC 视频创作者',
  description:
    '美区 TikTok 短视频创作者作品集 — 1年美区经验，单月 $19万 GMV，最高 180万+ 播放。专精 3C 数码 / 五金工具 / 居家生活实拍、AI+实拍降本增效、Veo / Seedance 2.0 全流程 AI 生成视频。',
  keywords: ['TikTok', '短视频', 'AIGC', 'Veo', 'Seedance', '美区', '视频创作者', '作品集'],
  openGraph: {
    title: '夏建洪 | 美区 TikTok 拍剪 & AIGC 视频创作者',
    description: '1年美区经验 · 单月 $19万 GMV · 最高 180万+ 播放',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
