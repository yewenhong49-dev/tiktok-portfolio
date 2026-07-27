'use client';

import { useState, useMemo, useCallback } from 'react';
import PortfolioHeader from '@/components/Header';
import VideoGrid from '@/components/VideoGrid';
import VideoFeed from '@/components/VideoFeed';
import VideoLightbox from '@/components/VideoLightbox';
import Footer from '@/components/Footer';
import { videos } from '@/data/videos';
import type { VideoItem } from '@/data/videos';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<VideoItem['category']>('real');
  const [lightboxVideo, setLightboxVideo] = useState<VideoItem | null>(null);

  const filteredVideos = useMemo(
    () => videos.filter((v) => v.category === activeCategory),
    [activeCategory]
  );

  const openLightbox = useCallback((video: VideoItem) => {
    setLightboxVideo(video);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxVideo(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full max-w-[1280px] mx-auto px-8">
      {/* Header：标题 + 标签 + 联系方式 + 分类Tab */}
      <PortfolioHeader
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* 主内容 */}
      <main className="flex-1 w-full">
        {/* 📱 移动端：全屏沉浸式上下滑动 */}
        <VideoFeed videos={filteredVideos} onOpenLightbox={openLightbox} />

        {/* 💻 PC端：响应式网格布局 */}
        <div className="hidden md:block py-2">
          <VideoGrid videos={filteredVideos} onOpenLightbox={openLightbox} />
        </div>
      </main>

      {/* 页脚 */}
      <Footer />

      {/* 全屏 Lightbox 弹窗 */}
      {lightboxVideo && (
        <VideoLightbox video={lightboxVideo} onClose={closeLightbox} />
      )}
    </div>
  );
}
