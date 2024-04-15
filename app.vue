<script lang="ts" setup>
import '@arco-design/web-vue/es/message/style/css.js'
import '@arco-design/web-vue/es/notification/style/css.js'
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
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
