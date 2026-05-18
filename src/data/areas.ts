export interface Area {
  slug: string;        // URLスラッグ（例: yokohama）
  name: string;        // 地域名（例: 横浜市）
  prefecture: string;  // 都道府県（例: 神奈川県）
  description: string; // 一行説明
  landmark: string;    // 代表的な地名・駅など
}

export const AREAS: Area[] = [
  {
    slug: "area-a",
    name: "○○市",
    prefecture: "○○県",
    description: "○○市全域に対応しています。最短即日でお伺いします。",
    landmark: "○○駅周辺",
  },
  {
    slug: "area-b",
    name: "△△市",
    prefecture: "○○県",
    description: "△△市全域に対応しています。お気軽にご相談ください。",
    landmark: "△△駅周辺",
  },
  {
    slug: "area-c",
    name: "□□市",
    prefecture: "○○県",
    description: "□□市全域に対応しています。土日祝日も年中無休です。",
    landmark: "□□駅周辺",
  },
  {
    slug: "area-d",
    name: "××市",
    prefecture: "○○県",
    description: "××市全域に対応しています。当日対応もご相談ください。",
    landmark: "××駅周辺",
  },
  {
    slug: "area-e",
    name: "◇◇町",
    prefecture: "○○県",
    description: "◇◇町全域に対応しています。遠方でもご相談ください。",
    landmark: "◇◇エリア",
  },
];
