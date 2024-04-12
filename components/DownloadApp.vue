<template>
  <a-modal
    v-model:visible="chatStore.showDownload"
    :hide-title="true"
    modalClass="download-modal"
  >
    <div class="block" @click.stop>
      <p>
        Download the app to <br />experience<br />
        full functionality
      </p>
      <a
        href="https://app.adjust.com/17i7dbt8"
        rel="nofollow external"
        target="_blank"
        >Xmate App</a
      >
    </div>
  </a-modal>
</template>

<script setup>
import { Message } from '@arco-design/web-vue'
import { useChatStore } from '~/stores/chat.store.ts'

const chatStore = useChatStore()

const {
  public: { origin }
} = useRuntimeConfig()

// 显示登录弹窗
const showModal = ref(true)
defineExpose({
  showModal
})

const chargeList = ref([{}, {}, {}, {}, {}])

const goLink = (link) => {
  window.open(link)
}
</script>

<style scoped lang="scss">
.block {
  width: 3.87rem;
  height: fit-content;
  padding: 0.5rem 0.5475rem 0.45rem 0.5475rem;
  border-radius: 0.225rem;
  background: #000000;
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  p {
    font-size: 0.225rem;
    font-weight: 500;
    line-height: 0.345rem;
    font-variation-settings: 'opsz' auto;
    color: #ffffff;
    text-align: center;
    white-space: word;
  }
  a {
    width: 2.7788rem;
    height: 0.54rem;
    margin-top: 0.4125rem;
    border-radius: 0.4rem;
    background: #ffa13a;
    font-size: 0.18rem;
    font-weight: 500;
    font-variation-settings: 'opsz' auto;
    color: #000000;
    text-shadow: 0px 4.5px 11.25px rgba(190, 190, 190, 0.302);
    display: grid;
    place-content: center;
  }
}

@media screen and (max-width: 480px) {
  .block {
    width: 70.4vw;
    height: fit-content;
    padding: 9.6vw 5.3333vw;
    border-radius: 5.3333vw;
    border: 2px solid rgba(255, 255, 255, 0.3);
    p {
      font-size: 4.2667vw;
      font-weight: 500;
      line-height: 5.8667vw;
    }
    a {
      width: 100%;
      height: 9.6vw;
      margin-top: 5.3333vw;
      border-radius: 5.3333vw;
      font-size: 3.7333vw;
    }
  }
}
</style>
