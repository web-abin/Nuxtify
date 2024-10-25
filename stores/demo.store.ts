import { defineStore } from 'pinia'

function storeSetup() {
    const demoState = reactive({
        count: 1
    })

    const addCount = () => {
        demoState.count++
    }

    return {
        ...toRefs(demoState),
        addCount
    }
}
export const useDemoStore = defineStore('app-demo', storeSetup, {
    storage: persistedState.localStorage,
    persist: false
})
