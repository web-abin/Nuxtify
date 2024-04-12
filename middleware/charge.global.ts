import { Notification } from '@arco-design/web-vue'
import { useChargeStore } from '~/stores/charge.store'

export default defineNuxtRouteMiddleware((to) => {
  const chargeStore = useChargeStore()
  // 显示支付结果
  chargeStore.showChargeResult = !!to.query.type
})
