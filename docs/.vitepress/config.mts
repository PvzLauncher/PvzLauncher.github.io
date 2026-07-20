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
          {
            text:'Windows 版本',
            collapsed : false,
            items:[
              { text: '启动', link: '/tutorial/Windows/launch.md' },
          { text: '管理', link: '/tutorial/Windows/manage.md' },
          { text: '导入', link: '/tutorial/Windows/import.md' },
          { text: '下载', link: '/tutorial/Windows/download.md' },
          { text: '任务', link: '/tutorial/Windows/task.md' },
          { text: '设置', link: '/tutorial/Windows/settings.md' },
          { text: '关于', link: '/tutorial/Windows/about.md' },
            ]
          },
          {
            text:'Android 版本',
            collapsed : false,
            items:[
              { text: '启动', link: '/tutorial/Android/launch.md' },
          { text: '管理', link: '/tutorial/Android/manage.md' },
          { text: '导入', link: '/tutorial/Android/import.md' },
          { text: '下载', link: '/tutorial/Android/download.md' },
          { text: '任务', link: '/tutorial/Android/task.md' },
          { text: '设置', link: '/tutorial/Android/settings.md' },
          { text: '关于', link: '/tutorial/Android/about.md' },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PvzLauncher/' },
    ]
  }
})
