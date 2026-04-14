/**
 * 会社情報シングルソース
 * ここを更新すれば全ページ・JSON-LDに自動反映される
 */
export const COMPANY = {
  name: "ルネデザイン",
  nameEn: "Renee Design",
  tagline: "不用品回収・ハウスクリーニングのプロフェッショナル",
  description: "不用品回収・ハウスクリーニングのルネデザイン。丁寧な作業と明確な料金でご安心ください。",

  // 連絡先
  tel: "000-0000-0000",         // ← 実際の番号に変更
  telHref: "tel:0000000000",    // ← ハイフンなし
  email: "info@renee-design.co.jp",

  // 所在地
  address: {
    postalCode: "000-0000",     // ← 実際の郵便番号
    addressRegion: "XX県",      // ← 都道府県
    addressLocality: "XX市",    // ← 市区町村
    streetAddress: "XXX",       // ← 番地以降
  },

  // 営業時間
  hours: "8:00〜20:00（年中無休）",
  openingHours: "Mo-Su 08:00-20:00",

  // 対応エリア
  areaServed: ["XX市", "XX市", "XX市"],  // ← 実際のエリアに変更

  // 座標（GoogleマップURLから取得）
  geo: {
    lat: 35.0,   // ← 実際の緯度
    lng: 135.0,  // ← 実際の経度
  },

  // Google Maps 埋め込みURL（Googleマップ→共有→地図を埋め込む で取得）
  googleMapsEmbedUrl: "",  // ← 取得後に入力

  // SNS / 外部リンク
  lineUrl: "",              // ← LINE公式アカウントURL
  googleBusinessUrl: "",    // ← Googleビジネスプロフィール URL

  // 許認可情報（E-E-A-T 必須）
  licenses: [
    // "古物商許可証 第XXXXXXXX号",
    // "一般廃棄物収集運搬業許可 第XXXX号",
  ],

  // Formspree フォームID
  formspreeId: "XXXXXXXX",  // ← formspree.ioで取得

  // サイトURL（ドメイン確定後に更新）
  siteUrl: "https://renee-design.co.jp",

  // OGP
  ogImage: "/images/og-image.jpg",
} as const;
