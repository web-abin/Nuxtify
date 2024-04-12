import { defineStore } from 'pinia'
import {
  fetchPriceList,
  postCreateOrder,
  fetchPayStatus,
  postPaySuccess,
  postPayCancel
} from '~/apis/order'

function storeSetup() {
  const chargeState = reactive({
    // 显示充值弹窗
    showCharge: false,
    // 显示充值结果
    showChargeResult: false,
    // 是否支付成功
    isPaySusscess: false,

    // 充值金额列表
    priceList: [],
    // 选择的充值金额
    payCoin: {},
    // 订单id
    orderId: '',
    // 支付回调token
    payToken: ''
  })

  // 获取充值金额列表
  const getPriceList = () => {
    return new Promise((resolve, reject) => {
      fetchPriceList()
        .then((response: any) => {
          if (response.code == 200) {
            chargeState.priceList = response.data.priceList
            chargeState.payCoin = chargeState.priceList[0]
          } else {
          }
          resolve(response)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  // 创建订单
  const handleCreateOrder = (options: any) => {
    return new Promise((resolve, reject) => {
      postCreateOrder(options)
        .then((response: any) => {
          if (response.code == 200) {
            chargeState.orderId = response.data.order_id
          }
          resolve(response)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  // 获取充值状态
  const getChargeStatus = () => {
    return new Promise((resolve, reject) => {
      fetchPayStatus()
        .then((response: any) => {
          resolve(response)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }
  const getPayPaySuccess = (options: any) => {
    return new Promise((resolve, reject) => {
      postPaySuccess(options)
        .then((response: any) => {
          resolve(response)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }
  const getPayPayCancel = (options: any) => {
    return new Promise((resolve, reject) => {
      postPayCancel(options)
        .then((response: any) => {
          resolve(response)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  return {
    ...toRefs(chargeState),
    getPriceList,
    handleCreateOrder,
    getChargeStatus,
    getPayPaySuccess,
    getPayPayCancel
  }
}
export const useChargeStore = defineStore('app-charge', storeSetup, {
  persist: {
    paths: ['priceList']
  }
})
