export interface Area {
  slug: string;        // URLスラッグ（例: yokohama）
  name: string;        // 地域名（例: 横浜市）
  prefecture: string;  // 都道府県（例: 神奈川県）
  description: string; // 一行説明
  landmark: string;    // 代表的な地名・駅など
}

export const AREAS: Area[] = [
  {
    slug: "nagoya-nakamura",
    name: "名古屋市中村区",
    prefecture: "愛知県",
    description: "名古屋市中村区全域に対応しています。拠点エリアのため最短即日でお伺いします。",
    landmark: "名古屋駅・中村公園周辺",
  },
  {
    slug: "nagoya-nishi",
    name: "名古屋市西区",
    prefecture: "愛知県",
    description: "名古屋市西区全域に対応しています。お気軽にご相談ください。",
    landmark: "浄心・栄生エリア",
  },
  {
    slug: "nagoya-naka",
    name: "名古屋市中区",
    prefecture: "愛知県",
    description: "名古屋市中区全域に対応しています。土日祝日も年中無休です。",
    landmark: "栄・大須周辺",
  },
  {
    slug: "nagoya-atsuta",
    name: "名古屋市熱田区",
    prefecture: "愛知県",
    description: "名古屋市熱田区全域に対応しています。当日対応もご相談ください。",
    landmark: "熱田神宮・金山周辺",
  },
  {
    slug: "nagoya-nakagawa",
    name: "名古屋市中川区",
    prefecture: "愛知県",
    description: "名古屋市中川区全域に対応しています。遠慮なくご連絡ください。",
    landmark: "尾頭橋・山王エリア",
  },
  {
    slug: "nagoya-minato",
    name: "名古屋市港区",
    prefecture: "愛知県",
    description: "名古屋市港区全域に対応しています。お見積もりは無料です。",
    landmark: "名古屋港・稲永エリア",
  },
  {
    slug: "kiyosu",
    name: "清須市",
    prefecture: "愛知県",
    description: "清須市全域に対応しています。最短即日でお伺いします。",
    landmark: "清洲駅・新清洲駅周辺",
  },
  {
    slug: "kita-nagoya",
    name: "北名古屋市",
    prefecture: "愛知県",
    description: "北名古屋市全域に対応しています。お気軽にご相談ください。",
    landmark: "西春・師勝エリア",
  },
  {
    slug: "ichinomiya",
    name: "一宮市",
    prefecture: "愛知県",
    description: "一宮市全域に対応しています。土日祝日も年中無休です。",
    landmark: "一宮駅・尾西エリア",
  },
  {
    slug: "kasugai",
    name: "春日井市",
    prefecture: "愛知県",
    description: "春日井市全域に対応しています。当日対応もご相談ください。",
    landmark: "春日井駅・高蔵寺エリア",
  },
];
