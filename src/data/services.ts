export const SERVICES = [
  {
    id: "junk-removal",
    title: "不用品回収",
    subtitle: "家具・家電・引越しゴミなど",
    description: "一点から部屋丸ごとまで、不用品を素早く丁寧に回収します。お見積もり無料。",
    icon: "truck",
    href: "/services/junk-removal/",
    features: [
      "最短即日対応",
      "お見積もり無料",
      "分別・搬出まで一括対応",
      "年中無休",
    ],
  },
  {
    id: "house-cleaning",
    title: "ハウスクリーニング",
    subtitle: "エアコン・浴室・キッチンなど",
    description: "プロの技術と専用洗剤で、頑固な汚れもスッキリ。入居前後の清掃も対応。",
    icon: "sparkles",
    href: "/services/house-cleaning/",
    features: [
      "プロ用機材使用",
      "完全個室作業",
      "入居前後も対応",
      "アレルギー対応洗剤",
    ],
  },
] as const;
