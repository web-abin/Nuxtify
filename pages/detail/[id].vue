<script lang="ts" setup>
import { useUserStore } from '~/stores/user.store'
const userStore = useUserStore()
definePageMeta({
  title: '文章详情',
  sort: -1
})

const articleInfo = ref({})
const route = useRoute()
const { data } = await useAsyncData(
  () =>
    useHttp.get(
      'https://jsonplaceholder.typicode.com/posts/' + route.params.id
    ),
  {
    immediate: true
  }
)

useServerSeoMeta({
  title: data.value.title
})

articleInfo.value = {
  title: `<${data.value.title}>`,
  body: `article content: ${data.value.body}`
}
</script>

<template>
  <div class="page">
    <h1>{{ articleInfo.title }}</h1>
    <p>{{ articleInfo.body }}</p>

    <section>
      文章详情页数据用useAsyncData服务端获取数据，配合sitemap动态生成地址，可以做每篇文章的seo
    </section>
  </div>
</template>

<style scoped lang="scss">
.page {
  h1 {
    font-weight: bold;
    width: 80%;
    text-align: center;
  }
  section {
    padding: 16px;
    margin-top: 32px;
    background-color: antiquewhite;
  }
}
</style>
