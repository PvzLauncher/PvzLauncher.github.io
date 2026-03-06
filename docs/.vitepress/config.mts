import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PvzLauncher 文档",
  lang: 'zh-CN',
  description: "Plants Vs. Zombies, 快速下载、管理、启动游戏！",
  base: '/pvzlauncher.github.io/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' }
    ],

    sidebar: [
      {
        text: 'PvzLauncher',
        items: [
          { text: '什么是PvzLauncher?', link: '/about' },
          { text: '快速开始', link: '/get-starting' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PvzLauncher/PvzLauncher' }
    ]
  }
})
