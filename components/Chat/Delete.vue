<template>
  <a-modal
    v-model:visible="showModal"
    :hide-title="true"
    modalClass="delete-chat-modal"
  >
    <div class="block" @click.stop>
      <p>
        Are you sure you want to delete the conversation with {AI Name}? All
        messages will be lost
      </p>

      <div class="btns">
        <button cancle @click="showModal = false">Cancle</button>
        <button confirm @click="handleDeleteChat">Continue</button>
      </div>
    </div>
  </a-modal>
</template>

<script setup>
import { Message } from '@arco-design/web-vue'
import { useChatStore } from '~/stores/chat.store'

const chatStore = useChatStore()

// 显示登录弹窗
const showModal = ref(false)
defineExpose({
  showModal
})

const handleDeleteChat = () => {
  showModal.value = false
}
</script>

<style scoped lang="scss">
.block {
  width: 3.87rem;
  height: fit-content;
  padding: 0.405rem 0.33rem 0.45rem 0.33rem;
  border-radius: 0.225rem;
  background: #000000;
  border: 2px solid rgba(255, 255, 255, 0.3);
  p {
    margin-bottom: 0.2625rem;
    padding: 0 0.15rem;
    font-size: 0.225rem;
    font-weight: 400;
    line-height: 0.345rem;
    text-align: center;
    color: #ffffff;
  }
  .btns {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: calc(50% - 0.075rem);
      height: 0.54rem;
      border-radius: 0.27rem;
      font-size: 0.18rem;
      font-weight: 500;
      line-height: 1;
      background: none;
      &[cancle] {
        border: 1.5px solid #fff;
        color: #ffffff;
        opacity: 0.5;
      }
      &[confirm] {
        color: #000000;
        background: #ffa13a;
      }
    }
  }
}
</style>
