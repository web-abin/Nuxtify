import { defineStore } from 'pinia'
import type { LoginParams, LoginResultModel } from '~/apis/login'
import { userLogin, getUserCenter } from '~/apis/user'

function storeSetup() {
  const state = reactive<any>({
    token: '',
    userInfo: {}
  })

  // 获取账户信息 余额
  const getUser = () => {
    return new Promise((resolve, reject) => {
      getUserCenter()
        .then((response: any) => {
          if (response.code == 200) {
            state.userInfo.coins_balance = response.data.coins_balance
            resolve(response)
          }
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  // 获取用户信息
  const getUserInfo = (params: any) => {
    return new Promise((resolve, reject) => {
      userLogin(params)
        .then((response: any) => {
          if (response.code === 200) {
            state.userInfo = response.data
            state.token = response.data.apikey
            resolve(response)
          } else {
            resolve(response)
          }
          resolve(response)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  const logout = () => {
    document.cookie.split(';').forEach(function (cookie) {
      const name = cookie.split('=')[0].trim()
      document.cookie =
        name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    })
    reloadNuxtApp({
      force: true,
      persistState: false
    })
  }

  return {
    ...toRefs(state),
    getUser,
    getUserInfo,
    logout
  }
}
export const useUserStore = defineStore('app-user', storeSetup, {
  persist: {
    paths: ['token', 'userInfo']
  }
})
