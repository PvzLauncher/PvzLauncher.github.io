import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme(),

    lang: 'zh-CN',
    title: 'PvzLauncher 文档',
    description: '植物大战僵尸启动器官方文档',


    theme: defaultTheme({
        navbar: [
            { text: '指南', link: '/guide/'},
        ]
    })
})