<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'

const { proxy } = getCurrentInstance() as { proxy: any }
const router = useRouter()
const route = useRoute()
definePageMeta({
  title: '首页',
  sort: 0
})

const { public: envConfig } = useRuntimeConfig()

let nuxtApp: any
if (process.client) {
  nuxtApp = useNuxtApp()
  proxy.$helloAbin()
  nuxtApp.$helloWorld()
}

const goPage = () => {
  navigateTo('/list')
}
</script>

<template>
  <div>
    <p
      class="w-fit mb-[16px] px-[16px] bg-[#edfcf7] leading-[2] font-bold text-2xl"
    >
      Nuxtify：帮助你快速搭建一个nuxt3应用！
    </p>
    <div class="flex gap-2 items-center my-4">
      <a
        href="~/assets/images/github.png"
        rel="nofollow external"
        target="_blank"
      >
        <img src="~/assets/images/github.png" alt="github" />
      </a>
      <a
        href="https://juejin.cn/user/994399097982728/posts"
        rel="nofollow external"
        target="_blank"
      >
        <img src="~/assets/images/juejin.png" alt="掘金" />
      </a>
    </div>

    <a-button type="primary" @click="goPage">路由导航</a-button>

    <h3 class="my-[20px]">运行时环境变量：</h3>
    <p>{{ envConfig }}</p>
  </div>
</template>

<style scoped lang="scss">
a {
  width: 0.3rem;
  height: 0.3rem;
  display: grid;
  place-content: center;
}
</style>
