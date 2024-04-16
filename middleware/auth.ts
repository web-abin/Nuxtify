import { Notification } from '@arco-design/web-vue'
import { useUserStore } from '~/stores/user.store'

export default defineNuxtRouteMiddleware((to) => {
  if (process.client) {
    const userStore = useUserStore()
    !userStore.token && Notification.warning('未登录,请登录之后访问')
  }
})
