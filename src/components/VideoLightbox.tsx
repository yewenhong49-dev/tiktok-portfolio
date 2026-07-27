'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { VideoItem } from '@/data/videos';

interface VideoLightboxProps {
  video: VideoItem;
  onClose: () => void;
}

export default function VideoLightbox({ video, onClose }: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // ESC 关闭 + 锁定 body 滚动
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // 带声音自动播放
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    el.volume = 1.0;
    el.play().catch(() => {
      // 浏览器可能拦截有声自动播放，回退到静音自动播放
      if (el) {
        el.muted = true;
        el.play().catch(() => {});
      }
    });
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/92 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* 右上角关闭按钮 */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
          flex items-center justify-center transition-colors cursor-pointer"
        aria-label="关闭"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* 视频播放区 — 阻止点击冒泡 */}
      <div
        className="relative flex items-center justify-center max-w-[95vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.coverUrl}
          controls
          autoPlay
          playsInline
          preload="auto"
          suppressHydrationWarning
          className="max-w-full max-h-[85vh] rounded-xl shadow-2xl shadow-black/50"
        />
      </div>

      {/* 底部标题 */}
      <div className="mt-4 text-center px-4">
        <p className="text-white/90 text-sm font-semibold">{video.title}</p>
        <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase
          bg-white/10 text-white/50">
          {video.tag}
        </span>
      </div>
    </div>
  );
}
