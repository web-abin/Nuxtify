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
    <ul>
      <li>
        <a
          href="https://github.com/web-abin/Nuxtify"
          rel="nofollow external"
          target="_blank"
        >
          github项目地址
        </a>
      </li>
      <li>
        <a
          href="https://juejin.cn/user/994399097982728/posts"
          rel="nofollow external"
          target="_blank"
        >
          掘金主页
        </a>
      </li>
      <li>
        <a
          href="https://web-abin.gitee.io/abin-web/tools"
          rel="nofollow external"
          target="_blank"
        >
          前端助手
        </a>
      </li>
    </ul>

    <a-button type="primary" @click="goPage">路由导航</a-button>

    <h3 class="my-[20px]">运行时环境变量：</h3>
    <p>{{ envConfig }}</p>
  </div>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  li {
    margin-bottom: 10px;
    a {
      display: block;
      font-size: 15px;
      line-height: 2;
      color: var(--color-main);
      text-decoration: underline;
    }
  }
}
</style>
