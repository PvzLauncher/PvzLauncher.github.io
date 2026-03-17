import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PvzLauncher 文档",
  description: "Plants Vs. Zombies, 快速下载、管理、启动游戏！",
  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' }
    ],

    sidebar: [
      {
        text: 'PvzLauncher',
        collapsed:false,
        items: [
          { text: '什么是PvzLauncher?', link: '/about' },
          { text: '快速开始', link: '/quick-start' }
        ]
      },
      {
        text: '教程',
        collapsed: false,
        items: [
          { text: '启动游戏', link: '/tutorial/launch.md' },
          { text: '管理游戏', link: '/tutorial/manage.md' },
          { text: '下载游戏', link: '/tutorial/download.md' },
          { text: '任务管理', link: '/tutorial/task.md' },
          { text: '设置', link: '/tutorial/settings.md' },
          { text: '关于页', link: '/tutorial/about.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PvzLauncher/PvzLauncher' }
    ]
  }
})
