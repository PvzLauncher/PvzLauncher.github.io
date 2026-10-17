import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "PvzLauncher",
    description: "PvzLauncher Official Website",
    themeConfig: {
        logo: "/icons/icon.svg",

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: '下载', link: '/downloads' }
        ],

        sidebar: [
            {
                text: 'PvzLauncher',
                items: [
                    { text: '下载', link: '/downloads' },
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/PvzLauncher/PvzLauncher' }
        ],

        outline: {
            label: "页面导航"
        }
    }
})
