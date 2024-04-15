import { Notification } from '@arco-design/web-vue'
import { useUserStore } from '~/stores/user.store'

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()
  if (!userStore.token) {
    Notification.warning('未登录,请登录之后访问')
  }
})
