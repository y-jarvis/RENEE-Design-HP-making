/**
 * 会社情報シングルソース
 * ここを更新すれば全ページ・JSON-LDに自動反映される
 */
export const COMPANY = {
  name: "ルネデザイン",
  nameEn: "Renee Design",
  tagline: "不用品回収・ハウスクリーニングのプロフェッショナル",
  headline: "地域の暮らしを、もっと豊かに。",
  mission: "不用品回収・ハウスクリーニングを通じて、お客様の生活環境を整え、地域の暮らしに貢献する会社です。",
  description: "不用品回収・ハウスクリーニングのルネデザイン。丁寧な作業と明確な料金でご安心ください。",

  // 連絡先
  tel: "052-990-3968",
  telHref: "tel:0529903968",
  email: "info@renee-design.co.jp",

  // 所在地
  address: {
    postalCode: "453-0866",
    addressRegion: "愛知県",
    addressLocality: "名古屋市中村区",
    streetAddress: "横井2丁目71番地",
  },

  // 営業時間
  hours: "8:00〜20:00（年中無休）",
  openingHours: "Mo-Su 08:00-20:00",

  // 対応エリア（名古屋市中村区拠点）
  areaServed: [
    "名古屋市中村区",
    "名古屋市西区",
    "名古屋市中区",
    "名古屋市熱田区",
    "名古屋市中川区",
    "名古屋市港区",
    "清須市",
    "北名古屋市",
    "一宮市",
    "春日井市",
  ],

  // 座標（Googleマップで「横井2丁目71番地」を検索して確認を）
  geo: {
    lat: 35.1657,
    lng: 136.8681,
  },

  // Google Maps 埋め込みURL（Googleマップ→共有→地図を埋め込む で取得）
  googleMapsEmbedUrl: "",  // ← 取得後に入力

  // SNS / 外部リンク
  lineUrl: "",              // ← LINE公式アカウントURL
  googleBusinessUrl: "",    // ← Googleビジネスプロフィール URL

  // 許認可情報（E-E-A-T 必須）
  licenses: [
    "古物商許可証 第541052601400号（愛知県公安委員会）",
    // "一般廃棄物収集運搬業許可 第XXXX号", ← お持ちであれば追加
  ],

  // Formspree フォームID
  formspreeId: "XXXXXXXX",  // ← formspree.ioで取得

  // サイトURL（ドメイン確定後に更新）
  siteUrl: "https://renee-design.co.jp",

  // OGP
  ogImage: "/images/og-image.jpg",
} as const;
