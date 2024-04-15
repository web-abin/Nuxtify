<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'
import { useUserStore } from '~/stores/user.store'
import { getPostList } from '~/apis/posts'

definePageMeta({
  title: '请求封装',
  sort: 1
})
const userStore = useUserStore()

const onFetch = async () => {
  const res = await $fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'GET',
    params: {
      param1: 1,
      param2: 1
    }
  })
  Message.info(JSON.stringify(res))
}

const onUsefetch = async () => {
  const { data, pending, error, refresh } = await useFetch(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      pick: ['title', 'body']
    }
  )
  Message.info(JSON.stringify(data.value))
}

const onMyFetch1 = async () => {
  const res = await useHttp.get(`https://jsonplaceholder.typicode.com/users/4`)
  Message.info(JSON.stringify(res))
}

const onMyFetch2 = async () => {
  const res = await userStore.getUserInfo()
  Message.info(JSON.stringify(res))
}

const page = ref(1)
// immediate 进入页面请求接口,使用execute手动请求,顶层请求使用useAsyncData
const { data, pending, execute } = await useAsyncData(
  () => getPostList({ _start: page.value, _limit: 2 }),
  {
    immediate: true
  }
)
</script>

<template>
  <div>
    <div class="flex space-x-4">
      <a-button type="primary" status="success" @click="onFetch"
        >$fetch</a-button
      >
      <a-button type="primary" status="success" @click="onUsefetch"
        >useFetch</a-button
      >

      <a-button type="primary" status="success" @click="onMyFetch1"
        >请求封装1</a-button
      >

      <a-button type="primary" status="success" @click="onMyFetch2"
        >请求封装2</a-button
      >

      <a-button type="primary" status="success" @click="execute()"
        >刷新</a-button
      >
    </div>

    <div v-if="pending" class="w-full flex justify-center">
      <a-spin :size="32" class="mt-[20px]" />
    </div>

    <p v-else class="mt-[20px]">{{ data }}</p>
  </div>
</template>

<style scoped></style>
