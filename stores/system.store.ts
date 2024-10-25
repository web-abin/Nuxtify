import { defineStore } from 'pinia'

function storeSetup() {
    const systemState = reactive({
        // 显示个人账户信息
        showProfile: false
    })

    return {
        ...toRefs(systemState)
    }
}
export const useSystemStore = defineStore('app-system', storeSetup, {
    persist: false
})
