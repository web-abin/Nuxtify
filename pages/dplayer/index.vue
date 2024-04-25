<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'

definePageMeta({
  title: '播放视频',
  sort: 7
})
const url: Ref<string> = ref('/ikun.mp4')

function onCanplay() {
  Message.success('视频准备就绪')
}
function onPlaying() {
  Message.success('开始播放')
}
function onPause() {
  Message.success('暂停')
}
</script>

<template>
  <div>
    <div class="text-2xl font-bold">dplayer</div>
    <DPlayer
      class="player"
      :url="url"
      :auto-play="true"
      @canplay="onCanplay"
      @playing="onPlaying"
      @pause="onPause"
    />
  </div>
</template>

<style scoped>
.player {
  width: 100%;
}
</style>
