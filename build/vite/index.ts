import type { NuxtConfig } from '@nuxt/schema'
import { useEnv } from '../env'
import { createVitePlugins } from './plugins'

export function createViteConfig(): NuxtConfig['vite'] {
  const { viteEnv } = useEnv()
  return {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/style/mixin.scss";' //全局引入变量
        }
      }
    },
    ssr: {
      noExternal: ['@arco-design/web-vue']
    },
    plugins: createVitePlugins(viteEnv),
    server: {
      // https: {
      //   key: './key.pem',
      //   cert: './cert.pem'
      // },
      // proxy: {
      //   '/api': {
      //     target: 'https://xxxxxx', // 将请求代理到目标地址
      //     rewrite: (path) => path.replace(/^\/api/, ''), // 重写请求路径，去掉 '/api' 前缀
      //     changeOrigin: true // 更改请求头中的 Origin
      //   }
      // }
    }
  }
}
