<script lang="ts" setup>
import LottieAnimation from '@/components/LottieAnimation/index.vue'

definePageMeta({
  title: 'Lottie动画示例',
  sort: 9
})
const lottieRef = ref<InstanceType<typeof LottieAnimation>>()
</script> 

<template>
  <div class="h-full flex">
    <LottieAnimation
      ref="lottieRef"
      path="/lottie3.json"
      :loop="true"
      class="mx-auto h-[350px] w-[350px]"
    />

    <LottieAnimation
      ref="lottieRef"
      path="/lottie2.json"
      :loop="true"
      class="mx-auto h-[350px] w-[350px]"
    />
  </div>
</template>

<style scoped></style>
