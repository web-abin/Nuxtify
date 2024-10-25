// 全局路由中间件
import { Message } from '@arco-design/web-vue'
export default defineNuxtRouteMiddleware((to, from) => {
  // 判断环境
  if (process.client)
    Message.info(`来自全局路由中间件(从" ${from.path} "跳转到" ${to.path} ")`)

  const {
    public: { appTitle }
  } = useRuntimeConfig()
  if (!['detail-id', 'seo'].includes(to.name)) {
    useHead({
      title: to.meta.title ? `${appTitle}-${to.meta.title}` : appTitle
    })
  }
})
