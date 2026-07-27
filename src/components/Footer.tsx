export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} 夏建洪 — 美区 TikTok 拍剪 & AIGC 视频创作者
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Built with Next.js · Tailwind CSS · Lucide Icons
        </p>
      </div>
    </footer>
  );
}
