'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronDown, Tag, Heart, Share2, Maximize2 } from 'lucide-react';
import type { VideoItem } from '@/data/videos';

interface VideoFeedProps {
  videos: VideoItem[];
  onOpenLightbox: (video: VideoItem) => void;
}

export default function VideoFeed({ videos, onOpenLightbox }: VideoFeedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 客户端挂载标记，防止 SSR/CSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const slides = containerRef.current.querySelectorAll('[data-video-slide]');

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    slides.forEach((slide) => observerRef.current?.observe(slide));

    return () => observerRef.current?.disconnect();
  }, [videos]);

  const playVideo = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const slide = container.querySelector(`[data-index="${index}"]`) as HTMLElement;
    if (!slide) return;

    container.querySelectorAll('video').forEach((v) => {
      if (v !== slide.querySelector('video')) {
        v.pause();
      }
    });

    const video = slide.querySelector('video') as HTMLVideoElement;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    playVideo(activeIndex);
  }, [activeIndex, playVideo]);

  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
        <span className="text-4xl mb-3">📭</span>
        <p className="text-base font-medium">暂无视频</p>
        <p className="text-xs text-gray-600 mt-1">该分类下还没有上传作品</p>
      </div>
    );
  }

  // SSR 阶段渲染空占位，避免 video src 造成 hydration mismatch
  if (!mounted) {
    return (
      <div className="relative h-[calc(100dvh-120px)] md:hidden">
        <div ref={containerRef} className="h-full">
          {videos.map((video, index) => (
            <div
              key={video.id}
              data-video-slide
              data-index={index}
              className="relative w-full h-full snap-start snap-always flex items-center justify-center bg-black"
            >
              {video.coverUrl ? (
                <img
                  src={video.coverUrl}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  suppressHydrationWarning
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
              )}
              <div className="absolute bottom-0 inset-x-0 z-10 p-4 pb-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center">
                    <Tag className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-white leading-snug">{video.title}</h3>
                    <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-purple-600/40 text-purple-200 border border-purple-400/20">{video.tag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[calc(100dvh-120px)] md:hidden">
      {activeIndex === 0 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1
          animate-bounce pointer-events-none">
          <span className="text-xs text-white/60">下滑查看更多</span>
          <ChevronDown className="w-5 h-5 text-white/60" />
        </div>
      )}

      <div
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        style={{ scrollSnapType: 'y mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {videos.map((video, index) => (
          <div
            key={video.id}
            data-video-slide
            data-index={index}
            className="relative w-full h-full snap-start snap-always flex items-center justify-center bg-black"
          >
            {/* 视频 — preload=metadata + #t=0.1 强制首帧封面 */}
            <video
              src={`${video.videoUrl}#t=0.1`}
              poster={video.coverUrl}
              loop
              muted
              playsInline
              preload="metadata"
              disableRemotePlayback
              suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* 全屏放大按钮 */}
            <button
              onClick={() => onOpenLightbox(video)}
              className="absolute top-10 right-3 z-20 w-9 h-9 rounded-full bg-black/40
                flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
              aria-label="全屏播放"
            >
              <Maximize2 className="w-5 h-5 text-white/80" />
            </button>

            {/* 点击中央区域弹窗 */}
            <div
              className="absolute inset-0 z-10 flex items-center justify-center"
              onClick={() => onOpenLightbox(video)}
            />

            {/* 右侧交互按钮 */}
            <div className="absolute right-3 bottom-20 z-10 flex flex-col items-center gap-5 pointer-events-none">
              <button className="flex flex-col items-center gap-1 group cursor-pointer pointer-events-auto">
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center
                  group-active:scale-90 transition-transform">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-white/80 font-medium">点赞</span>
              </button>

              <button className="flex flex-col items-center gap-1 group cursor-pointer pointer-events-auto">
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center
                  group-active:scale-90 transition-transform">
                  <Share2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-white/80 font-medium">分享</span>
              </button>
            </div>

            {/* 底部信息 */}
            <div className="absolute bottom-0 inset-x-0 z-10 p-4 pb-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-red-500
                  flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Tag className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-white leading-snug">
                    {video.title}
                  </h3>
                  <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider
                    bg-purple-600/40 text-purple-200 border border-purple-400/20 backdrop-blur-sm">
                    {video.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* 进度指示器 */}
            <div className="absolute top-4 left-0 right-0 z-10 flex justify-center gap-1.5">
              {videos.map((_, i) => (
                <div
                  key={i}
                  className={`h-0.5 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? 'w-6 bg-white'
                      : i < activeIndex
                        ? 'w-3 bg-white/40'
                        : 'w-3 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
