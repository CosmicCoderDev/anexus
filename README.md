<div align="center">

# ANexus.

**用代码构建有意义的东西，然后把过程写下来。**

Building meaningful things with code, then writing about the process.

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://anexus.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[🌐 Live Site](https://anexus.dev) · [📝 Blog](https://anexus.dev/blog) · [🛠️ Projects](https://anexus.dev/projects)

</div>

---

## ✨ Features

- 🌗 **Dark Tech Theme** — Custom design system with CSS variables, glassmorphism, mesh gradient animations
- 🌏 **Bilingual (ZH/EN)** — Full Chinese + English support with one-click switching
- 📝 **Content Collections** — Type-safe blog posts and project showcases with Zod schema
- 🔍 **Full-text Search** — Pagefind integration, triggered by `Ctrl+K`
- 📋 **Code Copy Button** — One-click copy on all code blocks
- 📑 **Table of Contents** — Auto-generated, scroll-synced sidebar TOC
- 🎬 **View Transitions** — Smooth page navigation animations
- 📡 **RSS Feed** — Standard RSS subscription support
- ⚡ **Zero JS by default** — Pure static HTML, loads instantly

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 5](https://astro.build) |
| Styling | Vanilla CSS (custom design tokens) |
| Typography | Inter + JetBrains Mono |
| Search | [Pagefind](https://pagefind.app) |
| Deployment | Cloudflare Pages |
| Domain | [anexus.dev](https://anexus.dev) |

## 📁 Project Structure

```
src/
├── components/       # UI components
│   ├── Nav.astro           Glassmorphism navbar + i18n switcher
│   ├── Hero.astro          Homepage hero with mesh gradient
│   ├── ProjectCard.astro   Glow-border project cards
│   ├── PostCard.astro      Blog post cards with accent border
│   ├── SearchModal.astro   Ctrl+K search overlay
│   ├── CopyButton.astro    Code block copy button
│   ├── TableOfContents.astro   Scroll-synced TOC
│   └── BackToTop.astro     Scroll-to-top button
├── content/          # Markdown content
│   ├── blog/zh/            Chinese blog posts
│   ├── blog/en/            English blog posts
│   └── projects/           Project showcases
├── i18n/             # Bilingual translations
├── layouts/          # Page layouts
├── pages/            # Route pages (ZH + EN)
└── styles/           # Design system + prose styles
```

## 🚀 Quick Start

```bash
# Install
npm install

# Dev server
npm run dev          # → http://localhost:4321

# Build
npm run build        # → ./dist/

# Preview production build
npm run preview
```

## ✍️ Writing a Post

Create a `.md` file in `src/content/blog/zh/` or `src/content/blog/en/`:

```markdown
---
title: "Article Title"
description: "Brief description"
date: 2026-02-15
tags: ["typescript", "architecture"]
lang: zh
readingTime: 8
---

Your content here...
```

Then `git push` — Cloudflare Pages auto-deploys.

## 📄 License

MIT
