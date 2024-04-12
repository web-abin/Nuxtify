<template>
  <div class="page">
    <Chat-Viewer />
  </div>
</template>

<script setup>
import { isMobile } from '~/utils/common'

const router = useRouter()
definePageMeta({
  layout: false
})
if (!isMobile()) {
  router.replace('/chat')
}
</script>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100vh;
}
</style>
