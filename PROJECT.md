# ルネデザイン コーポレートサイト

## クライアント情報
- 会社名: ルネデザイン（Renee Design）
- 業種: BtoC 生活系サービス（不用品回収・ハウスクリーニング）
- ターゲット: BtoC（一般家庭・引越し・退去・遺品整理）
- サイト目的: 問い合わせ獲得・信頼性訴求・エリアSEO

## デザイン方向性
- 伝えたい印象: 清潔感・信頼感・安心感・スピード感
- 避けたい印象: チャラい・安っぽい・不明瞭
- 選定系統: **B モダンテック系**（清潔感と革新性を構造とアクセントで表現）

## 選定パターン
| セクション | パターンID | 実装状況 |
|-----------|-----------|---------|
| Hero | B-Hero-02（分割レイアウト） | ✅ |
| Intro | B-Intro-02（数値バッジ付き） | ✅ |
| Services | B-Services-01（2カラム写真カード） | ✅ |
| Flow | B-Flow-01（横ステップフロー） | ✅ |
| Customer Voice | B-CustomerVoice-01（証言カード・星評価） | ✅ |
| FAQ | B-FAQ-01（アコーディオン） | ✅ |
| Service Area | B-ServiceArea-01（エリアグリッド） | ✅ |
| Contact | B-Contact-02（電話・LINE・フォーム3択） | ✅ |
| Footer | B-Footer-01（4カラム） | ✅ |

## サイト構成
### トップページ（/）
Hero → 数字バッジ → Intro → Services → Flow → CustomerVoice → FAQ → ServiceArea → CTABanner

### サブページ
- /services/ — 事業内容一覧
- /services/junk-removal/ — 不用品回収
- /services/junk-removal/estate/ — 遺品整理
- /services/junk-removal/moving/ — 引越し不用品
- /services/house-cleaning/ — ハウスクリーニング
- /services/house-cleaning/aircon/ — エアコン
- /services/house-cleaning/bathroom/ — 浴室
- /services/house-cleaning/kitchen/ — キッチン
- /services/house-cleaning/moving/ — 入退去時
- /price/ — 料金案内
- /flow/ — ご利用の流れ
- /faq/ — よくある質問
- /about/ — 会社概要
- /area/ — 対応エリア一覧
- /area/[city] — 各エリア個別ページ
- /blog/ — お役立ち情報
- /contact/ — お問い合わせ
- /privacy/ — プライバシーポリシー

## 技術要件
- フレームワーク: Astro + Tailwind CSS
- ホスティング: Cloudflare Pages（予定）
- フォーム: Formspree（設定中）
- CMS: Markdown（ブログ）

## デザイントークン
- brand-primary: #0077c7（メインブルー）
- brand-accent: #ff9900（オレンジCTA）
- brand-dark: #23221e（テキスト）
- brand-secondary: #f8f7f6（ページ背景）
- ベースカラー（ナビ・Hero）: #0F2952（ネイビー）

## 残タスク
- [ ] 電話番号・住所・許認可番号の実情報入力（company.ts）
- [ ] LINE公式アカウントURL設定
- [ ] Google Maps 埋め込みURL取得
- [ ] Formspree フォームID設定
- [ ] OGP画像作成（/public/images/og-image.jpg）
- [ ] 実素材写真への差し替え（Unsplash仮配置中）
- [ ] Cloudflare Pages デプロイ設定
- [ ] Google Search Console 登録
