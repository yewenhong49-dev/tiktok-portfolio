export interface VideoItem {
  id: string;
  title: string;
  category: 'real' | 'ai-real' | 'pure-ai';
  tag: string;
  coverUrl: string;
  videoUrl: string;
}

const BASE = '/portfolio';

const enc = (s: string) => encodeURIComponent(s);
const videoUrl = (dir: string, file: string) => `${BASE}/${dir}/${enc(file)}`;

/* ==================== 实拍视频 (16) ==================== */
const realVideos: VideoItem[] = [
  { file: '安克屏显充电器.mp4',   title: '安克屏显充电器',   tag: '3C数码' },
  { file: '安克屏显充电器-2.mp4', title: '安克屏显充电器-2', tag: '3C数码' },
  { file: '三合一U盘.mp4',        title: '三合一U盘',        tag: '3C数码' },
  { file: '多功能充电线.mp4',     title: '多功能充电线',     tag: '3C数码' },
  { file: '彩色充电宝.mp4',       title: '彩色充电宝',       tag: '3C数码' },
  { file: '七色表带手表.mp4',     title: '七色表带手表',     tag: '3C数码' },
  { file: '行车记录仪.mp4',       title: '行车记录仪',       tag: '汽配数码' },
  { file: '草坪清扫机.mp4',       title: '草坪清扫机',       tag: '五金工具' },
  { file: '磁力钻.mp4',           title: '磁力钻',           tag: '五金工具' },
  { file: '继电器检测器.mp4',     title: '继电器检测器',     tag: '五金工具' },
  { file: '迷你油锯.mp4',         title: '迷你油锯',         tag: '五金工具' },
  { file: '汽车千斤顶.mp4',       title: '汽车千斤顶',       tag: '五金工具' },
  { file: '立柱式挖坑机.mp4',     title: '立柱式挖坑机',     tag: '五金工具' },
  { file: '拆除电镐.mp4',         title: '拆除电镐',         tag: '五金工具' },
  { file: '情人节信封.mp4',       title: '情人节信封',       tag: '居家生活' },
  { file: '红牛发光杯.mp4',       title: '红牛发光杯',       tag: '居家生活' },
].map(({ file, title, tag }, i) => ({
  id: `real-${i + 1}`,
  title,
  category: 'real' as const,
  tag,
  coverUrl: '',
  videoUrl: videoUrl('shipai', file),
}));

/* ==================== AI + 实拍 (5) ==================== */
const aiRealVideos: VideoItem[] = [
  { file: '六合一修剪工具.mp4',   title: '六合一修剪工具',   tag: 'AI+实拍' },
  { file: '地板千斤顶.mp4',       title: '地板千斤顶',       tag: 'AI+实拍' },
  { file: '泳池砂滤泵.mp4',       title: '泳池砂滤泵',       tag: 'AI+实拍' },
  { file: '泳池砂滤泵-脚本2.mp4', title: '泳池砂滤泵-脚本2', tag: 'AI+实拍' },
  { file: '防草布.mp4',           title: '防草布',           tag: 'AI+实拍' },
].map(({ file, title, tag }, i) => ({
  id: `ai-real-${i + 1}`,
  title,
  category: 'ai-real' as const,
  tag,
  coverUrl: '',
  videoUrl: videoUrl('ai_shipai', file),
}));

/* ==================== 纯 AI 生成 (7) ==================== */
const pureAiVideos: VideoItem[] = [
  { file: '450件工具套装.mp4',  title: '450件工具套装',  tag: 'Veo' },
  { file: '六合一修剪工具.mp4', title: '六合一修剪工具', tag: 'Veo' },
  { file: '挂壁式风扇.mp4',     title: '挂壁式风扇',     tag: 'Seedance' },
  { file: '泳池砂滤泵.mp4',     title: '泳池砂滤泵',     tag: 'Veo' },
  { file: '立柱式挖坑机.mp4',   title: '立柱式挖坑机',   tag: 'Seedance' },
  { file: '高压喷涂机.mp4',     title: '高压喷涂机',     tag: 'Seedance' },
  { file: '高压水枪.mp4',       title: '高压水枪',       tag: 'Veo' },
].map(({ file, title, tag }, i) => ({
  id: `pure-ai-${i + 1}`,
  title,
  category: 'pure-ai' as const,
  tag,
  coverUrl: '',
  videoUrl: videoUrl('ai_video', file),
}));

export const videos: VideoItem[] = [...realVideos, ...aiRealVideos, ...pureAiVideos];

export const categories = [
  { key: 'real' as const,     label: '实拍视频',       subtitle: '3C数码 / 五金工具 / 居家生活' },
  { key: 'ai-real' as const,  label: 'AI + 实拍视频',  subtitle: '实拍素材 + AIGC 降本增效' },
  { key: 'pure-ai' as const,  label: '纯 AI 生成视频', subtitle: 'Veo / Seedance 2.0 全流程生成' },
];

export const contact = {
  name: '夏建洪',
  title: '美区 TikTok 拍剪 & AIGC 视频创作者',
  phone: '13217981220',
  email: 'yewenhong49@gmail.com',
  wechat: 'knight0441',
};
