// https://nuxt.com/docs/api/configuration/nuxt-config
import { createRuntimeConfig, createViteConfig } from './build'
import tdk from './tdk'

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    keepalive: true,
    head: {
      title: tdk.SEO_title,
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        },
        { name: 'description', content: tdk.SEO_description },
        { name: 'keywords', content: tdk.SEO_keywords }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      // 苹果登录  https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/configuring_your_webpage_for_sign_in_with_apple
      script: [
        {
          src: 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
          async: true
        }
        // {
        //   id: 'facebook-jssdk',
        //   src: 'https://connect.facebook.net/en_US/sdk.js',
        //   async: true
        // }
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
    'nuxt-vue3-google-signin'
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
  // 谷歌登录  https://console.cloud.google.com/apis/credentials/oauthclient/802818305618-0mq1mg94kdmf43p2sovuq68bhj5p38gi.apps.googleusercontent.com?project=xmate-418709
  googleSignIn: {
    clientId:
      '802818305618-0mq1mg94kdmf43p2sovuq68bhj5p38gi.apps.googleusercontent.com'
  }
})
