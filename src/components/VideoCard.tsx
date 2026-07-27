'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Tag, Maximize2 } from 'lucide-react';
import type { VideoItem } from '@/data/videos';

interface VideoCardProps {
  video: VideoItem;
  onOpenLightbox: (video: VideoItem) => void;
}

export default function VideoCard({ video, onOpenLightbox }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      const el = videoRef.current;
      el.muted = true;
      el.currentTime = 0;
      el.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, []);

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/5
        hover:border-purple-500/30 transition-all duration-500
        hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 视频画面区 — aspect-[9/16] 自适应高度，无 max-h 限制 */}
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={mounted ? `${video.videoUrl}#t=0.1` : undefined}
          poster={video.coverUrl}
          loop
          muted
          playsInline
          preload="metadata"
          disableRemotePlayback
          suppressHydrationWarning
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Hover 播放提示 */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
            bg-black/30 pointer-events-none ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center
            group-hover:scale-110 transition-transform duration-300 border border-white/20">
            <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
          </div>
        </div>

        {/* 全屏放大按钮 */}
        {mounted && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox(video);
            }}
            className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-black/50
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
              flex items-center justify-center hover:bg-black/70 cursor-pointer"
            aria-label="全屏播放"
          >
            <Maximize2 className="w-3.5 h-3.5 text-white" />
          </button>
        )}

        {/* 渐变底部信息条 */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* 卡片信息 — 极小内边距 */}
      <div className="p-2" onClick={() => mounted && onOpenLightbox(video)}>
        <div className="flex items-start gap-1.5">
          <div className="flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-red-500
            flex items-center justify-center mt-0.5">
            <Tag className="w-3 h-3 text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="text-[11px] font-semibold text-gray-200 leading-snug line-clamp-2 group-hover:text-white transition-colors">
              {video.title}
            </h3>
            <span className="inline-block mt-0.5 px-1.5 py-px rounded text-[9px] font-semibold uppercase tracking-wider
              bg-gradient-to-r from-purple-600/30 to-purple-500/20 text-purple-300/80 border border-purple-500/20">
              {video.tag}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
