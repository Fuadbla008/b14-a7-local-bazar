# 🛒 বাজার দর — BazarDor

> প্রয়োজনীয় পণ্যের দাম এক নজরে।

চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার আজকের বাজার দর — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।

---

## 📌 Live Links

- **Live Site:** [https://localbazar.zoogle.store](https://localbazar.zoogle.store)
- **GitHub Repository:** [https://github.com/your-username/bazardor](https://github.com/your-username/bazardor)

---

## ✨ Key Features

1. **🛒 ডাইনামিক হোম পেজ** — Top 6 দাম-বাড়া পণ্য (▲), Top 6 দাম-কমা পণ্য (▼), এবং সম্পূর্ণ পণ্য তালিকা responsive grid-এ প্রদর্শন।
2. **📊 বাজারভিত্তিক দামের তুলনা** — প্রতিটি পণ্যের জন্য সর্বনিম্ন, সর্বোচ্চ ও গড় দাম; বিভিন্ন বাজারে পণ্যটির দাম তুলনা করার টেবিল।
3. **🔐 BetterAuth দিয়ে সম্পূর্ণ Authentication** — Email/Password, Google এবং GitHub OAuth সাইন-ইন/সাইন-আপ; protected route-এ redirect সহ toast notification।
4. **🔍 ক্যাটাগরি ফিল্টার ও সর্টিং** — প্রতিটি ক্যাটাগরি পেজে ডিফল্ট / দাম: কম থেকে বেশি / দাম: বেশি থেকে কম sort dropdown সহ skeleton loading state।
5. **👤 প্রোফাইল ব্যবস্থাপনা** — লগ-ইন ব্যবহারকারীর জন্য profile page, নাম আপডেট করার সুবিধা, এবং সাইন-আউট।

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 16 (App Router)** | Full-stack React framework, routing, SSR, API routes |
| **JavaScript (JSX)** | Application logic, no TypeScript |
| **Tailwind CSS v4** | Styling, responsive design, custom design tokens |
| **Next.js Font Optimization** | Hind Siliguri — Bengali typography with `next/font` |
| **BetterAuth** | Authentication — Email/Password, Google, GitHub OAuth |
| **MongoDB Atlas + MongoDB Adapter** | Persistent storage for users, sessions, accounts |
| **react-hot-toast** | Toast notifications (success, error, protected route) |
| **REST API** | `https://openapi.programming-hero.com/api/bazardor` |
| **Vercel** | Deployment & hosting |

---

## 📂 Project Structure

bazardor/
├── src/
│ ├── app/
│ │ ├── layout.jsx → Root layout (Navbar + Ticker + Footer)
│ │ ├── page.jsx → Home page
│ │ ├── not-found.jsx → 404 page
│ │ ├── globals.css → Tailwind + design tokens
│ │ ├── category/[slug]/page.jsx → Category products + sort
│ │ ├── product/[slug]/page.jsx → Product details (protected)
│ │ ├── signin/page.jsx → Sign in
│ │ ├── signup/page.jsx → Sign up
│ │ ├── profile/page.jsx → My profile
│ │ ├── profile/update/page.jsx → Update name
│ │ └── api/auth/[...all]/route.js → BetterAuth handler
│ ├── components/
│ │ ├── Navbar.jsx → Logo + auth + category nav
│ │ ├── CategoryNav.jsx → Category pills (active highlight)
│ │ ├── PriceTicker.jsx → Infinite marquee
│ │ ├── ProfileDropdown.jsx → User menu (profile / signout)
│ │ ├── Hero.jsx → Home hero with CTA
│ │ ├── SectionHeader.jsx → Reusable section title
│ │ ├── ProductCard.jsx → Product card (emoji, price, change)
│ │ ├── ProductGrid.jsx → Responsive grid + skeleton
│ │ ├── ChangeBadge.jsx → ▲/▼/— change badge
│ │ ├── BengaliDate.jsx → Bangla date (hydration-safe)
│ │ ├── SortDropdown.jsx → Sort control (C1)
│ │ ├── EmptyState.jsx → Empty/404 message
│ │ ├── AuthCard.jsx → Auth form shell
│ │ ├── SocialButtons.jsx → Google + GitHub buttons
│ │ └── Footer.jsx → Figma-matching footer
│ └── lib/
│ ├── api.js → API wrapper + unit converter
│ ├── toBengali.js → English → Bengali numerals
│ ├── sortProducts.js → Numeric sort helper
│ ├── auth.js → BetterAuth server config
│ └── auth-client.js → BetterAuth client hooks
├── .env.local → Local env (git-ignored)
├── next.config.js
├── package.json
└── README.md


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bazardor.git
cd bazardor

```
### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Project root-এ .env.local file তৈরি করো:

```bash
# API
NEXT_PUBLIC_API_BASE_URL=https://openapi.programming-hero.com/api/bazardor

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000

# BetterAuth secret — random long string
BETTER_AUTH_SECRET=your_random_secret_string_here

# MongoDB Atlas
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/bazardor
MONGODB_DB=bazardor

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

```

### 4. Run the development server

```bash
npm run dev

```
Open http://localhost:3000

### 5. Build for production

npm run build
npm start



## OAuth Setup

### Google OAuth

1. Google Cloud Console → OAuth 2.0 Client ID তৈরি করো

2. Authorized JavaScript origins: http://localhost:3000, https://your-live-url

3. Authorized redirect URIs: http://localhost:3000/api/auth/callback/google, https://your-live-url/api/auth/callback/google

## GitHub OAuth

1. GitHub Developer Settings → New OAuth App

2. Authorization callback URL: http://localhost:3000/api/auth/callback/github (dev) — live deploy-এর জন্য আলাদা OAuth App বা URL switch

---

### API Reference

Base URL: https://openapi.programming-hero.com/api/bazardor

Method	       Endpoint	                    Description
GET	        /products	                All products (33 items)
GET	        /products?category=chal	    Filter products by category
GET	        /products/1	                Single product by ID
GET	        /categories	                All categories (8 items)
GET	        /categories/chal	        Single category by slug

---

## Design Highlights

Primary color: #16a34a (Bengali-flag-green inspired)

Page background: #f4f7f4 (subtle green tint)

Change badge logic: ▲ red (দাম বেড়েছে — buyer এর জন্য খারাপ), ▼ green (দাম কমেছে)

Typography: Hind Siliguri via next/font/google, tabular-nums for numbers

Container: max-w-6xl — consistent across all pages

Responsive breakpoints: mobile (1 col) → tablet (2 col) → desktop (3 col)

Sticky navbar with price ticker marquee below

---

## Requirements Covered

☑ Navbar with logo, Bangla date, category links, auth buttons
☑ Price ticker (infinite marquee with emoji + price + change badge)
☑ Hero with anchor CTA (#সব-পণ্য scroll)
☑ Section A — আজ দাম বেড়েছে ▲ (top 6 risers)
☑ Section B — আজ দাম কমেছে ▼ (top 6 fallers)
☑ Section C — সব পণ্য (responsive grid)
☑ Product detail page (protected) with summary + bazar table
☑ Category page with sort dropdown + skeleton + empty state
☑ Sign in / Sign up (BetterAuth: email/password + Google + GitHub)
☑ Toast notifications on auth events + protected route redirect
☑ Profile page + Update name (C3)
☑ Footer matching Figma
☑ 404 page for invalid routes
☑ Skeleton loaders on Home + Category + Product
☑ Responsive — mobile, tablet, desktop
☑ Bengali numerals everywhere (toBn / bnNumber)
☑ Dynamic [slug] routes survive hard reload on Vercel
☑ Sort dropdown with Bengali numerals handling (C1)
☑ README with project name, description, technologies, 5 features (C2)

---

