// https://nuxt.com/docs/api/configuration/nuxt-config
import { createRuntimeConfig, createViteConfig } from './build'
import tdk from './tdk'
import sitemap from './public/sitemap.js'

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    keepalive: true,
    head: {
      title: tdk.Title,
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        },
        { name: 'description', content: tdk.SEO_DESCRIPTION },
        { name: 'keywords', content: tdk.SEO_KEYWORDS },
        { name: 'og:title', content: tdk.SEO_TITLE },
        { name: 'og:site_name', content: tdk.SEO_TITLE },
        {
          name: 'og:description',
          content: tdk.SEO_DESCRIPTION
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.xxxxx.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  dir: {
    public: 'public'
  },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  css: ['assets/style/index.css', '@unocss/reset/tailwind-compat.css'],
  runtimeConfig: createRuntimeConfig(),
  typescript: {
    shim: false,
    strict: true
  },
  experimental: {
    // 启用新的实验性类型路由器使用 [unplugin-vue-router](https://github.com/posva/unplugin-vue-router).
    typedPages: true
  },
  vue: {
    // 实验性:启用' defineProps '的响应式解构 [Vue RFC#502](https://github.com/vuejs/rfcs/discussions/502)
    propsDestructure: true
  },
  vite: createViteConfig(),
  // vueuse
  vueuse: {
    ssrHandlers: true
  },
  // 站点地图配置
  site: {
    url: 'https://www.nuxtify.site',
    trailingSlash: false // 是否保留站点地图 url 的尾部斜杠
  },
  sitemap: sitemap
})
