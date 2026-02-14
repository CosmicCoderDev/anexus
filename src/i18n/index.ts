export const languages = {
  zh: '中文',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'zh';

export const ui = {
  zh: {
    'nav.projects': '项目',
    'nav.blog': '博客',
    'nav.about': '关于',
    'hero.greeting': 'Hi，我是',
    'hero.tagline': '全栈开发者 · 开源爱好者',
    'hero.description': '用代码构建有意义的东西，然后把过程写下来。',
    'section.featured': '精选项目',
    'section.latest': '最新文章',
    'section.allProjects': '查看全部项目',
    'section.allPosts': '查看全部文章',
    'post.readMore': '阅读全文',
    'post.min': '分钟',
    'footer.builtWith': '使用 Astro 构建',
    'tags.title': '标签',
    'search.placeholder': '搜索文章...',
    'page.notFound': '页面未找到',
    'page.backHome': '返回首页',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'hero.greeting': "Hi, I'm",
    'hero.tagline': 'Full-stack Developer · Open Source Enthusiast',
    'hero.description': 'Building meaningful things with code, then writing about the process.',
    'section.featured': 'Featured Projects',
    'section.latest': 'Latest Posts',
    'section.allProjects': 'View All Projects',
    'section.allPosts': 'View All Posts',
    'post.readMore': 'Read More',
    'post.min': 'min',
    'footer.builtWith': 'Built with Astro',
    'tags.title': 'Tags',
    'search.placeholder': 'Search posts...',
    'page.notFound': 'Page Not Found',
    'page.backHome': 'Back Home',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
