export interface VideoItem {
  id: string;
  title: string;
  category: 'real' | 'ai-real' | 'pure-ai';
  tag: string;
  coverUrl: string;
  videoUrl: string;
}

const BASE = 'https://media.xiajianhong.xyz';

/**
 * 编码 OSS 路径中的特殊字符
 * encodeURIComponent 不会编码 + 在某些 OSS 场景下可能出问题，
 * 这里显式将空格 → %20、+ → %2B，其余中文交给 encodeURIComponent
 */
const enc = (s: string) =>
  encodeURIComponent(s)
    .replace(/\+/g, '%2B')
    .replace(/%20/g, '%20'); // encodeURIComponent 已处理，保留确保一致性

/** 视频直链 */
const videoUrl = (dir: string, file: string) =>
  `${BASE}/${enc(dir)}/${enc(file)}`;

/** 封面直链 — OSS 视频截帧 (t_0.1 避免黑屏首帧) */
const coverUrl = (dir: string, file: string) =>
  `${BASE}/${enc(dir)}/${enc(file)}?x-oss-process=video/snapshot,t_100,f_jpg`;

export const videos: VideoItem[] = [
  // ==================== 🎬 实拍视频 (26 条) ====================
  // ===== 🔥 精选爆款 TOP 10 =====
  {
    id: 'real-01',
    title: '安克屏显充电器',
    category: 'real',
    tag: '3C数码',
    coverUrl: coverUrl('实拍视频', '安克新品-渠道号-有音乐.mp4'),
    videoUrl: videoUrl('实拍视频', '安克新品-渠道号-有音乐.mp4'),
  },
  {
    id: 'real-02',
    title: '草坪清扫机-脚本1',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '草坪清扫机1-BK-E1E2B3.mp4'),
    videoUrl: videoUrl('实拍视频', '草坪清扫机1-BK-E1E2B3.mp4'),
  },
  {
    id: 'real-03',
    title: '磁力钻-脚本1',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '磁力钻2-BK-B1B2Z3.mp4'),
    videoUrl: videoUrl('实拍视频', '磁力钻2-BK-B1B2Z3.mp4'),
  },
  {
    id: 'real-04',
    title: '继电器检测器',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '继电器检测器3.mp4'),
    videoUrl: videoUrl('实拍视频', '继电器检测器3.mp4'),
  },
  {
    id: 'real-05',
    title: '迷你油锯-脚本1',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '油锯1.mp4'),
    videoUrl: videoUrl('实拍视频', '油锯1.mp4'),
  },
  {
    id: 'real-06',
    title: '汽车千斤顶',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '千斤顶2.mp4'),
    videoUrl: videoUrl('实拍视频', '千斤顶2.mp4'),
  },
  {
    id: 'real-07',
    title: '挖坑机-脚本1',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '挖坑机2-BK-D1E2B3.mp4'),
    videoUrl: videoUrl('实拍视频', '挖坑机2-BK-D1E2B3.mp4'),
  },
  {
    id: 'real-08',
    title: '情人节信封',
    category: 'real',
    tag: '居家生活',
    coverUrl: coverUrl('实拍视频', '信封1.mp4'),
    videoUrl: videoUrl('实拍视频', '信封1.mp4'),
  },
  {
    id: 'real-09',
    title: '一次性马桶刷',
    category: 'real',
    tag: '居家生活',
    coverUrl: coverUrl('实拍视频', '马桶刷3.mp4'),
    videoUrl: videoUrl('实拍视频', '马桶刷3.mp4'),
  },
  {
    id: 'real-10',
    title: '六合一修剪工具',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '六合一3-BK-E1D2B3.mp4'),
    videoUrl: videoUrl('实拍视频', '六合一3-BK-E1D2B3.mp4'),
  },
  // ===== 其余实拍作品 =====
  {
    id: 'real-11',
    title: '行车记录仪',
    category: 'real',
    tag: '汽配数码',
    coverUrl: coverUrl('实拍视频', 'POP-行车记录仪1.mp4'),
    videoUrl: videoUrl('实拍视频', 'POP-行车记录仪1.mp4'),
  },
  {
    id: 'real-12',
    title: '三合一U盘',
    category: 'real',
    tag: '3C数码',
    coverUrl: coverUrl('实拍视频', 'U盘2.mp4'),
    videoUrl: videoUrl('实拍视频', 'U盘2.mp4'),
  },
  {
    id: 'real-13',
    title: '安克充电器-脚本2',
    category: 'real',
    tag: '3C数码',
    coverUrl: coverUrl('实拍视频', '安克新品7.mp4'),
    videoUrl: videoUrl('实拍视频', '安克新品7.mp4'),
  },
  {
    id: 'real-14',
    title: '红牛发光杯',
    category: 'real',
    tag: '居家生活',
    coverUrl: coverUrl('实拍视频', '杯子2.mp4'),
    videoUrl: videoUrl('实拍视频', '杯子2.mp4'),
  },
  {
    id: 'real-15',
    title: '剥线器-脚本1-西语',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '剥线器1-BK-C1F2G3.mp4'),
    videoUrl: videoUrl('实拍视频', '剥线器1-BK-C1F2G3.mp4'),
  },
  {
    id: 'real-16',
    title: '剥线器-脚本2-英语',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '剥线器2-BK-H1C2Z3.mp4'),
    videoUrl: videoUrl('实拍视频', '剥线器2-BK-H1C2Z3.mp4'),
  },
  {
    id: 'real-17',
    title: '草坪清扫机-脚本2',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '草坪清扫机1.mp4'),
    videoUrl: videoUrl('实拍视频', '草坪清扫机1.mp4'),
  },
  {
    id: 'real-18',
    title: '七彩充电宝',
    category: 'real',
    tag: '3C数码',
    coverUrl: coverUrl('实拍视频', '充电宝1.mp4'),
    videoUrl: videoUrl('实拍视频', '充电宝1.mp4'),
  },
  {
    id: 'real-19',
    title: '多功能快充数据线',
    category: 'real',
    tag: '3C数码',
    coverUrl: coverUrl('实拍视频', '充电线4.mp4'),
    videoUrl: videoUrl('实拍视频', '充电线4.mp4'),
  },
  {
    id: 'real-20',
    title: '磁力钻-脚本2',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '磁力钻1-BK-B1C2Z3.mp4'),
    videoUrl: videoUrl('实拍视频', '磁力钻1-BK-B1C2Z3.mp4'),
  },
  {
    id: 'real-21',
    title: '电镐-脚本1',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '电镐1-BK-A1D2A3.mp4'),
    videoUrl: videoUrl('实拍视频', '电镐1-BK-A1D2A3.mp4'),
  },
  {
    id: 'real-22',
    title: '一次性马桶刷-脚本2',
    category: 'real',
    tag: '居家生活',
    coverUrl: coverUrl('实拍视频', '马桶刷4.mp4'),
    videoUrl: videoUrl('实拍视频', '马桶刷4.mp4'),
  },
  {
    id: 'real-23',
    title: '便携式尿壶',
    category: 'real',
    tag: '居家生活',
    coverUrl: coverUrl('实拍视频', '尿壶2.mp4'),
    videoUrl: videoUrl('实拍视频', '尿壶2.mp4'),
  },
  {
    id: 'real-24',
    title: '七色表带手表',
    category: 'real',
    tag: '3C数码',
    coverUrl: coverUrl('实拍视频', '七色手表2.mp4'),
    videoUrl: videoUrl('实拍视频', '七色手表2.mp4'),
  },
  {
    id: 'real-25',
    title: '挖坑机-脚本2',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '挖坑机1-BK-D1E2B3.mp4'),
    videoUrl: videoUrl('实拍视频', '挖坑机1-BK-D1E2B3.mp4'),
  },
  {
    id: 'real-26',
    title: '迷你油锯-脚本2',
    category: 'real',
    tag: '五金工具',
    coverUrl: coverUrl('实拍视频', '油锯3.mp4'),
    videoUrl: videoUrl('实拍视频', '油锯3.mp4'),
  },

  // ==================== 🪄 AI + 实拍视频 (5 条) ====================
  // OSS 文件夹名: AI＋实拍（全角加号 U+FF0B，无空格）
  {
    id: 'ai-real-01',
    title: '地板千斤顶',
    category: 'ai-real',
    tag: 'AI+实拍',
    coverUrl: coverUrl('AI＋实拍', '地板千斤顶1.mp4'),
    videoUrl: videoUrl('AI＋实拍', '地板千斤顶1.mp4'),
  },
  {
    id: 'ai-real-02',
    title: '防草布',
    category: 'ai-real',
    tag: 'AI+实拍',
    coverUrl: coverUrl('AI＋实拍', '防草布2.mp4'),
    videoUrl: videoUrl('AI＋实拍', '防草布2.mp4'),
  },
  {
    id: 'ai-real-03',
    title: '六合一',
    category: 'ai-real',
    tag: 'AI+实拍',
    coverUrl: coverUrl('AI＋实拍', '六合一1.mp4'),
    videoUrl: videoUrl('AI＋实拍', '六合一1.mp4'),
  },
  {
    id: 'ai-real-04',
    title: '砂滤泵 ②',
    category: 'ai-real',
    tag: 'AI+实拍',
    coverUrl: coverUrl('AI＋实拍', '砂滤泵2.mp4'),
    videoUrl: videoUrl('AI＋实拍', '砂滤泵2.mp4'),
  },
  {
    id: 'ai-real-05',
    title: '砂滤泵 ④',
    category: 'ai-real',
    tag: 'AI+实拍',
    coverUrl: coverUrl('AI＋实拍', '砂滤泵4.mp4'),
    videoUrl: videoUrl('AI＋实拍', '砂滤泵4.mp4'),
  },

  // ==================== 🤖 纯 AI 生成视频 (11 条) ====================
  {
    id: 'pure-ai-01',
    title: '450 工具套装',
    category: 'pure-ai',
    tag: 'Veo',
    coverUrl: coverUrl('AI视频', '450工具套装1.mp4'),
    videoUrl: videoUrl('AI视频', '450工具套装1.mp4'),
  },
  {
    id: 'pure-ai-02',
    title: '高压水枪',
    category: 'pure-ai',
    tag: 'Veo',
    coverUrl: coverUrl('AI视频', '高压水枪1.mp4'),
    videoUrl: videoUrl('AI视频', '高压水枪1.mp4'),
  },
  {
    id: 'pure-ai-03',
    title: '挂壁风扇 ②',
    category: 'pure-ai',
    tag: 'Seedance',
    coverUrl: coverUrl('AI视频', '挂壁风扇2.mp4'),
    videoUrl: videoUrl('AI视频', '挂壁风扇2.mp4'),
  },
  {
    id: 'pure-ai-04',
    title: '挂壁风扇 ⑤',
    category: 'pure-ai',
    tag: 'Seedance',
    coverUrl: coverUrl('AI视频', '挂壁风扇5.mp4'),
    videoUrl: videoUrl('AI视频', '挂壁风扇5.mp4'),
  },
  {
    id: 'pure-ai-05',
    title: '六合一 ③',
    category: 'pure-ai',
    tag: 'Veo',
    coverUrl: coverUrl('AI视频', '六合一3.mp4'),
    videoUrl: videoUrl('AI视频', '六合一3.mp4'),
  },
  {
    id: 'pure-ai-06',
    title: '六合一 ⑥',
    category: 'pure-ai',
    tag: 'Veo',
    coverUrl: coverUrl('AI视频', '六合一6.mp4'),
    videoUrl: videoUrl('AI视频', '六合一6.mp4'),
  },
  {
    id: 'pure-ai-07',
    title: '喷涂机 ①',
    category: 'pure-ai',
    tag: 'Seedance',
    coverUrl: coverUrl('AI视频', '喷涂机1.mp4'),
    videoUrl: videoUrl('AI视频', '喷涂机1.mp4'),
  },
  {
    id: 'pure-ai-08',
    title: '喷涂机 ②',
    category: 'pure-ai',
    tag: 'Seedance',
    coverUrl: coverUrl('AI视频', '喷涂机2.mp4'),
    videoUrl: videoUrl('AI视频', '喷涂机2.mp4'),
  },
  {
    id: 'pure-ai-09',
    title: '砂滤泵 ③',
    category: 'pure-ai',
    tag: 'Veo',
    coverUrl: coverUrl('AI视频', '砂滤泵3.mp4'),
    videoUrl: videoUrl('AI视频', '砂滤泵3.mp4'),
  },
  {
    id: 'pure-ai-10',
    title: '挖坑机 ①',
    category: 'pure-ai',
    tag: 'Seedance',
    coverUrl: coverUrl('AI视频', '挖坑机1.mp4'),
    videoUrl: videoUrl('AI视频', '挖坑机1.mp4'),
  },
  {
    id: 'pure-ai-11',
    title: '挖坑机 ④',
    category: 'pure-ai',
    tag: 'Seedance',
    coverUrl: coverUrl('AI视频', '挖坑机4.mp4'),
    videoUrl: videoUrl('AI视频', '挖坑机4.mp4'),
  },
];

/** 分类配置 */
export const categories = [
  {
    key: 'real' as const,
    label: '实拍视频',
    subtitle: '3C数码 / 五金工具 / 居家生活',
  },
  {
    key: 'ai-real' as const,
    label: 'AI + 实拍视频',
    subtitle: '实拍素材 + AIGC 降本增效',
  },
  {
    key: 'pure-ai' as const,
    label: '纯 AI 生成视频',
    subtitle: 'Veo / Seedance 2.0 全流程生成',
  },
];

/** 联系人信息 */
export const contact = {
  name: '夏建洪',
  title: '美区 TikTok 拍剪 & AIGC 视频创作者',
  phone: '13217981220',
  email: 'yewenhong49@gmail.com',
  wechat: 'knight0441',
};
