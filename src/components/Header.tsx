'use client';

import { useState } from 'react';
import {
  Phone, Mail, MessageCircle, Flame, TrendingUp,
  Wrench, ExternalLink, Copy, Check,
  Video, Sparkles, Bot,
} from 'lucide-react';
import { contact, categories } from '@/data/videos';
import type { VideoItem } from '@/data/videos';

interface PortfolioHeaderProps {
  activeCategory: VideoItem['category'];
  onCategoryChange: (key: VideoItem['category']) => void;
}

const iconMap: Record<VideoItem['category'], typeof Video> = {
  real: Video, 'ai-real': Sparkles, 'pure-ai': Bot,
};

const tabCard: Record<VideoItem['category'], { border: string; glow: string; icon: string }> = {
  real:      { border: 'border-[#FE2C55]',  glow: 'shadow-[0_0_20px_rgba(254,44,85,0.15)]',    icon: 'text-[#FE2C55]' },
  'ai-real': { border: 'border-[#25F4EE]',  glow: 'shadow-[0_0_20px_rgba(37,244,238,0.15)]',  icon: 'text-[#25F4EE]' },
  'pure-ai': { border: 'border-[#D946EF]',  glow: 'shadow-[0_0_20px_rgba(217,70,239,0.15)]',  icon: 'text-[#D946EF]' },
};

export default function PortfolioHeader({ activeCategory, onCategoryChange }: PortfolioHeaderProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactItems = [
    { icon: Phone,         label: '电话', value: contact.phone,   accent: 'text-[#25F4EE]' },
    { icon: Mail,          label: '邮箱', value: contact.email,   accent: 'text-gray-400'  },
    { icon: MessageCircle, label: '微信', value: contact.wechat,  accent: 'text-[#FE2C55]' },
  ];

  const highlights = [
    { icon: Flame,      text: '1年美区经验',        accent: 'text-[#FE2C55]' },
    { icon: TrendingUp, text: '带团队单月 $19万 GMV', accent: 'text-[#25F4EE]' },
    { icon: TrendingUp, text: '最高 180万+ 播放',     accent: 'text-[#FE2C55]' },
  ];

  return (
    <header className="relative w-full pt-3 pb-2 border-b border-white/5">

      {/* ====== 右上角：简历按钮 ====== */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full
          bg-white/[0.03] backdrop-blur-sm
          border border-purple-500/20
          text-sm font-medium text-gray-300
          shadow-[0_0_18px_rgba(168,85,247,0.1)]
          hover:bg-white/[0.07] hover:border-purple-400/40
          hover:text-white hover:shadow-[0_0_28px_rgba(168,85,247,0.22)]
          hover:scale-[1.03]
          transition-all duration-300 cursor-pointer
          sm:inline-flex hidden"
      >
        <span className="text-base">📄</span>
        <span>查看个人简历</span>
      </a>

      <div className="flex flex-col items-center gap-3">

        {/* ====== 行 1：大气主标题 + 副标题 ====== */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight
            bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            夏建洪TikTok个人作品集
          </h1>
          <p className="text-sm text-gray-400 mt-1 tracking-wide">
            {contact.title}
          </p>
        </div>

        {/* ====== 行 2：亮点数据 + 自研工具 ====== */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          {highlights.map(({ icon: Icon, text, accent }) => (
            <span key={text}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 text-gray-300"
            >
              <Icon className={`w-4 h-4 ${accent}`} />
              {text}
            </span>
          ))}

          <a href="https://chuanbai-tiktok.streamlit.app/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
              bg-gradient-to-r from-[#25F4EE]/20 to-[#FE2C55]/20
              border border-[#25F4EE]/40 text-white text-sm font-semibold
              hover:scale-105 transition-transform cursor-pointer"
          >
            <Wrench className="w-4 h-4 text-[#25F4EE]" />
            自研提效工具
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>

        {/* ====== 行 3：联系方式 ====== */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 text-sm text-gray-400">
          {contactItems.map(({ icon: Icon, label, value, accent }) => (
            <span key={label} className="inline-flex items-center gap-1.5">
              {label === '微信' ? (
                <button onClick={() => copyToClipboard(value, label)}
                  className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                  <Icon className={`w-4 h-4 ${accent}`} />
                  {label}：{value}
                </button>
              ) : (
                <a href={label === '电话' ? `tel:${value}` : `mailto:${value}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Icon className={`w-4 h-4 ${accent}`} />
                  {label}：{value}
                </a>
              )}
              <button onClick={() => copyToClipboard(value, label)} title={`复制${label}`}>
                {copied === label
                  ? <Check className="w-3.5 h-3.5 text-green-400" />
                  : <Copy className="w-3.5 h-3.5 text-gray-600 hover:text-gray-400" />
                }
              </button>
            </span>
          ))}
        </div>

        {/* ====== 行 4：分类切换卡片 (细分描述) ====== */}
        <div className="grid grid-cols-3 gap-3 w-full">
          {categories.map((cat) => {
            const active = activeCategory === cat.key;
            const Icon = iconMap[cat.key];
            const c = tabCard[cat.key];
            return (
              <button key={cat.key} onClick={() => onCategoryChange(cat.key)}
                className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg border
                  transition-all duration-200 cursor-pointer
                  ${active
                    ? `${c.border} ${c.glow} bg-white/[0.06]`
                    : 'border-white/5 bg-white/[0.02] text-gray-500 hover:border-white/15 hover:bg-white/[0.04] hover:text-gray-300'
                  }`}
              >
                <div className="flex items-center gap-1.5 font-medium text-sm">
                  <Icon className={`w-3.5 h-3.5 ${active ? c.icon : 'text-gray-500'}`} />
                  {cat.label}
                </div>
                <p className="text-[11px] leading-tight text-gray-600/70">{cat.subtitle}</p>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
}
