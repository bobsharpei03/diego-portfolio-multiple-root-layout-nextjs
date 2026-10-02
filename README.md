# **Diego Portfolio — Multi‑Root Layout (Next.js 16)**

## 👨‍💻 About the Developer

This portfolio represents Diego’s work as a Salesforce Software Engineer and Frontend Developer, showcasing:
- Strong React/Next.js architecture skills
- Ability to build custom UI systems
- Experience with animations, interactivity, and modern frontend tooling
- Clean code organization and reusable component patterns

A modern, high‑performance developer portfolio built with **Next.js 16**, featuring **multiple root layouts**, dynamic UI behaviors, custom animation hooks, and a modular architecture designed for scalability and clean separation of concerns.  
This project demonstrates strong frontend engineering skills, architectural thinking, and production‑ready React/Next.js patterns.

---

## Folder Structure to achive two different colors landing pages
```
src/
 ├── app/
 │     ├── layout.js
 │     ├── (lightLandingPage)/
 │     │     └── layout.js
 │     └── (darkLandingPage)/
 │           └── layout.js
 ├── components/
 ├── hooks/
 ├── styles/
 ├── static/
 ├── utilits/
 └── functions/
```

## 🚀 **Features**

- **Multiple Root Layouts**  
  Separate layouts for different landing experiences (e.g., light/dark themes, alternate portfolio versions).

- **Custom UI/UX Hooks**  
  Includes reusable hooks for:
  - Scroll progress  
  - Sticky navigation  
  - WOW.js animation triggers  
  - Cursor effects  
  - Image data binding  
  - Skill progress animations  
  - Portfolio hover interactions  

- **Dynamic Content Loading**  
  Site metadata (logo, brand name, developer name) is loaded from `/static/siteSetting.json`.

- **Modular Component Architecture**  
  Components like `Header`, `MobileMenu`, `CopyRight`, `ImageView`, `VideoPopup`, and `ToastMessage` are cleanly separated.

- **Static Export Ready**  
  Configured with:
  ```js
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }

  ⭐ Highlighted File: `functions/index.js`
This file is a key part of your backend‑style utilities.
It shows your ability to integrate Express, Nodemailer, and custom server logic inside a Next.js project.

## What it demonstrates to employers:
- Understanding of server‑side logic inside a frontend‑focused project
- Ability to build API‑like utilities without relying on Next.js API routes
- Experience with email sending workflows
- Clean separation of concerns (UI vs. backend helpers)

## 🛠️ Tech Stack
### Frontend
- Next.js 16
- React 18
- TailwindCSS
- WOW.js animations
- Swiper sliders
- VanillaTilt
- React Toastify
- Intersection Observer
- CountUp animations

## Backend / Utilities
- Express
- Nodemailer
- CORS

## Build Tools
- PostCSS
- Autoprefixer
- ESLint
- Styled‑Components Babel plugin

# 📦 Installation

git clone https://github.com/bobsharpei03/diego-portfolio-multiple-root-layout-nextjs.git
cd diego-portfolio-multiple-root-layout-nextjs
npm install
npm run dev
