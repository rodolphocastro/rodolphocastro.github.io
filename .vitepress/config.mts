import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rodolpho's Alves Blog",
  description: "Rodolpho's Alves personal blog and cv",
  locales: {
    root: {
      label: 'English 🇺🇸',
      lang: 'en'
    },
    pt: {
      label: 'Português 🇧🇷',
      lang: 'pt'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts' },
      { text: 'Projects', link: '/markdown-examples' },
      { text: 'Resume', link: '/markdown-examples' }
    ],

    sidebar: {
      '/posts': postsSideBar()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rodolphocastro/rodolphocastro.github.io/' }
    ],

    footer: {
      message: "built with ❤️ using Vitepress",
      copyright: "Copyright 2024-present Rodolpho Alves"
    }
  }
})

function postsSideBar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '1 - Why',
      link: 'posts/001-why.md'
    }
  ]
}
