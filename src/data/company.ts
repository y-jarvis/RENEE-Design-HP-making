/**
 * 会社情報シングルソース
 * ここを更新すれば全ページ・JSON-LDに自動反映される
 */
export const COMPANY = {
  name: "RENEE Design",
  nameEn: "Renee Design",
  // 登記上の正式名称。会社概要・特定商取引法に基づく表記・プライバシーポリシーではこちらを使う（2026-09-22 オーナー確定）
  legalName: "株式会社ルネデザイン",
  representative: "代表取締役 小山 懐斗",
  tagline: "不用品回収・ハウスクリーニングのプロフェッショナル",
  headline: "地域の暮らしを、もっと豊かに。",
  mission: "不用品回収・ハウスクリーニングを通じて、お客様の生活環境を整え、地域の暮らしに貢献する会社です。",
  description: "名古屋市の不用品回収・ハウスクリーニングは RENEE Design へ。丁寧な作業と明確な料金でご安心ください。",

  // 連絡先
  tel: "052-990-3968",
  telHref: "tel:0529903968",
  // 旧値 info@renee-design.co.jp はドメイン自体が存在せず届かなかった（2026-09-22 判明・オーナー指定で差し替え）
  email: "info@reneedesign.co.jp",

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

  // 当社が運営するサービス（屋号）。会社概要の紹介と、特定商取引法に基づく表記の屋号欄に出す
  brands: [
    {
      name: "徳丸商会",
      url: "https://www.tokumarushokai.com/",
      summary: "名古屋市とその近郊の不用品回収・買取サービス",
      description:
        "徳丸商会は、株式会社ルネデザインが運営する不用品回収・買取のサービスです。名古屋市とその近郊で、ご家庭や事業所の不用品の回収と、家具・家電・ブランド品などの買取を行っています。買い取れるお品物は回収費用から差し引けるため、処分にかかる費用を抑えられます。",
    },
  ],

  // Formspree フォームID
  formspreeId: "XXXXXXXX",  // ← formspree.ioで取得

  // サイトURL。旧値 renee-design.co.jp は存在しないドメインで、canonical・OGP・サイトマップが全て空振りしていた
  siteUrl: "https://www.reneedesign.co.jp",

  // OGP
  ogImage: "/images/og-image.jpg",
} as const;
