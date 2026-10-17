import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "PvzLauncher 官方网站",
    description: "PvzLauncher - 简单易用的植物大战僵尸启动器",
    themeConfig: {
        siteTitle: "PvzLauncher",
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
        },

        footer: {
            message: "基于 GPL-v3 许可证发布",
            copyright: "版权所有 © 2025-2026 HuaMouRen 保留所有权利"
        }
    }
})
