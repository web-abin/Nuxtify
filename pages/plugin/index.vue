<script lang="ts" setup>
definePageMeta({
  title: '插件示例',
  sort: 6
})

console.log('%c页面setup', 'color:green')
onMounted(() => {
  console.log('%c页面挂载完成', 'color:green')
})
</script>

<template>
  <div>auth</div>
</template>

<style scoped></style>
