import { defineStore } from 'pinia'
import type { PostLoginParams } from '~/apis/user'
const api = useApi()

function storeSetup() {
    const state = reactive<any>({
        token: '',
        userInfo: {}
    })

    // 登录
    const postLogin = (params: PostLoginParams) => {
        return new Promise((resolve, reject) => {
            api.user
                .postLogin(params)
                .then((response: any) => {
                    if (response.code === 200) {
                        state.token = response.data.apikey
                        state.userInfo = response.data.user_info
                        reloadNuxtApp({
                            force: true,
                            persistState: false
                        })
                        resolve(response)
                    }
                    reject(response)
                })
                .catch((error: any) => {
                    reject(error)
                })
        })
    }

    // 模拟登录
    const mockLogin = () => {
        state.token = 'nuxtify'
        state.userInfo = {
            username: '前端阿彬',
            phone: '123456789'
        }
    }

    // 退出登录
    const postLogout = () => {
        document.cookie.split(';').forEach(function (cookie) {
            const name = cookie.split('=')[0].trim()
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        })
        reloadNuxtApp({
            force: true,
            persistState: false
        })
    }

    // 获取用户信息
    const getUserInfo = () => {
        return new Promise((resolve, reject) => {
            api.user
                .getUserCenter()
                .then((response: any) => {
                    if (response.code == 200) {
                        state.userInfo = response.data
                    }
                    resolve(response)
                })
                .catch((error: any) => {
                    reject(error)
                })
        })
    }

    return {
        ...toRefs(state),
        postLogin,
        mockLogin,
        postLogout,
        getUserInfo
    }
}
export const useUserStore = defineStore('app-user', storeSetup, {
    persist: {
        storage: persistedState.localStorage,
        paths: ['token', 'userInfo']
    }
})
