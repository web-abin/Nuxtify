<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'
definePageMeta({
  middleware: 'auth',
  title: '中间件认证示例',
  sort: 5
})
</script>

<template>
  <div class="page">
    <ContentDoc />
  </div>
</template>

<style scoped>
.page {
  padding-bottom: 1rem;
}
</style>
