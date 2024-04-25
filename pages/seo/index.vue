<script lang="ts" setup>
definePageMeta({
  title: 'seo设置',
  sort: 8
})

useSeoMeta({
  title: 'nuxtify',
  description: '最好的nuxt3脚手架'
})
</script>

<template>
  <div class="page">
    <ContentDoc class="markdown"/>
  </div>
</template>

<style scoped></style>
