<script lang="ts" setup>
import '@arco-design/web-vue/es/message/style/css.js'
import '@arco-design/web-vue/es/notification/style/css.js'
</script>

<template>
  <!-- 页面加载进度条 -->
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
#__nuxt {
  height: fit-content;
}
</style>
