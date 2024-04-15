<script lang="ts" setup>
import { useDemoStore } from '~/stores/demo.store'
import { useUserStore } from '~/stores/user.store'

definePageMeta({
  title: 'Pinia全局状态',
  sort: 4
})
const demoStore = useDemoStore()
const userStore = useUserStore()
</script>

<template>
  <div>
    <h1>pinia</h1>

    <p class="text-1xl mb-2">count: {{ demoStore.count }}</p>
    <a-button type="primary" class="mr-2" @click="demoStore.addCount"
      >count++</a-button
    >
    <a-button type="primary" @click="demoStore.count--">count--</a-button>

    <p class="mt-6">是否登录：{{ !!userStore.token }}</p>
    <p class="my-2">登录用户信息：{{ userStore.userInfo }}</p>
    <a-button type="primary" class="mr-2" @click="userStore.mockLogin"
      >模拟登录</a-button
    >
    <a-button type="primary" @click="userStore.postLogout">退出登录</a-button>
  </div>
</template>

<style scoped></style>
