'use client';

import VideoCard from './VideoCard';
import type { VideoItem } from '@/data/videos';

interface VideoGridProps {
  videos: VideoItem[];
  onOpenLightbox: (video: VideoItem) => void;
}

export default function VideoGrid({ videos, onOpenLightbox }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-gray-500">
        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
          <span className="text-3xl">📭</span>
        </div>
        <p className="text-lg font-medium">暂无视频</p>
        <p className="text-sm text-gray-600 mt-1">该分类下还没有上传作品</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} onOpenLightbox={onOpenLightbox} />
      ))}
    </div>
  );
}
