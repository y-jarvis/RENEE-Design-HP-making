export interface SubService {
  slug: string;
  parentSlug: "house-cleaning" | "junk-removal";
  title: string;
  subtitle: string;
  description: string;
  href: string;
  keywords: string[];     // SEOキーワード（title/descriptionに使用）
  metaDescription: string;
}

export const SUB_SERVICES: SubService[] = [
  // ハウスクリーニング系
  {
    slug: "aircon",
    parentSlug: "house-cleaning",
    title: "エアコンクリーニング",
    subtitle: "Air Conditioner Cleaning",
    description: "エアコン内部を高圧洗浄。カビ・ホコリを根本除去して電気代削減・空気環境改善。",
    href: "/services/house-cleaning/aircon/",
    keywords: ["エアコンクリーニング", "エアコン掃除", "エアコン洗浄"],
    metaDescription: "エアコンクリーニングの費用・所要時間・効果を解説。カビ・ホコリを根本除去し、冷暖房効率と空気質を改善します。お見積もり無料。",
  },
  {
    slug: "bathroom",
    parentSlug: "house-cleaning",
    title: "浴室クリーニング",
    subtitle: "Bathroom Cleaning",
    description: "カビ・水垢・石鹸カスを業務用洗剤で徹底除去。タイル目地までピカピカに。",
    href: "/services/house-cleaning/bathroom/",
    keywords: ["浴室クリーニング", "お風呂クリーニング", "風呂掃除"],
    metaDescription: "浴室クリーニングの費用と効果。カビ・水垢・石鹸カスをプロが根本除去。タイル目地・鏡・蛇口まで徹底洗浄します。",
  },
  {
    slug: "kitchen",
    parentSlug: "house-cleaning",
    title: "キッチン・レンジフードクリーニング",
    subtitle: "Kitchen Cleaning",
    description: "頑固な油汚れを業務用溶剤で分解除去。レンジフード・コンロ・シンクを一気にきれいに。",
    href: "/services/house-cleaning/kitchen/",
    keywords: ["キッチンクリーニング", "レンジフード掃除", "換気扇洗浄"],
    metaDescription: "キッチン・レンジフードクリーニングの費用と手順。業務用溶剤で頑固な油汚れを徹底除去。コンロ・シンク・換気扇まで対応します。",
  },
  {
    slug: "moving",
    parentSlug: "house-cleaning",
    title: "退去・入居時クリーニング",
    subtitle: "Move-in / Move-out Cleaning",
    description: "賃貸退去の原状回復から新居の入居前クリーニングまで対応。管理会社・オーナーからのご依頼も歓迎。",
    href: "/services/house-cleaning/moving/",
    keywords: ["退去クリーニング", "原状回復", "入居前クリーニング", "引越しクリーニング"],
    metaDescription: "退去・入居時クリーニングの費用相場と対応内容。原状回復から新居クリーニングまで対応。管理会社・オーナー様からのご依頼も承ります。",
  },
  // 不用品回収系
  {
    slug: "estate",
    parentSlug: "junk-removal",
    title: "遺品整理・生前整理",
    subtitle: "Estate Clearance",
    description: "故人・ご本人の遺品・生前整理をサポート。搬出から清掃まで一貫対応。",
    href: "https://www.tokumarushokai.com/ihin/estate/",
    keywords: ["遺品整理", "生前整理", "遺品回収"],
    metaDescription: "遺品整理・生前整理の費用と流れ。故人の品を丁寧に扱いながら搬出・処分まで対応。賃貸退去の期日がある場合もご相談ください。",
  },
  {
    slug: "moving",
    parentSlug: "junk-removal",
    title: "引越し不用品回収",
    subtitle: "Moving Junk Removal",
    description: "引越し前後の不用品を一括回収。大型家電・家具から小物まで最短即日対応。",
    href: "https://www.tokumarushokai.com/ihin/moving/",
    keywords: ["引越し不用品", "引越しゴミ回収", "引越し片付け"],
    metaDescription: "引越し時の不用品回収に対応。大型家電・家具・引越しゴミをまとめて回収します。最短即日対応、お見積もり無料。",
  },
];
