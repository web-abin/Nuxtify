<template>
  <div class="chat-input">
    <div class="tools">
      <div class="tool" @click="onTools('Selfie')">
        <img src="~/assets/images/e1.webp" alt="Selfie" />
        <span>Selfie</span>
      </div>
      <div class="tool" @click="onTools('Story')">
        <img src="~/assets/images/e2.webp" alt="Story" />
        <span>Story</span>
      </div>
      <div class="tool" @click="onTools('AI')">
        <img src="~/assets/images/e3.webp" alt="AI" />
        <span>AI</span>
      </div>
      <div class="tool" @click="onTools('Date')">
        <img src="~/assets/images/e4.webp" alt="Date" />
        <span>Date</span>
      </div>
      <div class="tool" @click="onTools('RPG')">
        <img src="~/assets/images/e5.webp" alt="RPG" />
        <span>RPG</span>
      </div>
    </div>

    <div class="my-input">
      <a-textarea
        placeholder="Say something…"
        v-model="myInput"
        :auto-size="{ minRows: 1, maxRows: 3 }"
      />
      <button
        v-show="!chatStore.isSending"
        :disabled="!myInput"
        @click="chatStore.handleSendMessage"
        send
      >
        <img src="~/assets/images/a16.webp" alt="发送按钮" />
      </button>

      <a-spin class="sending" v-show="chatStore.isSending" />
    </div>
  </div>
</template>

<script setup>
import { useChatStore } from '~/stores/chat.store'

const chatStore = useChatStore()

const myInput = ref('')

const onTools = (tool) => {
  switch (tool) {
    case '234':
      break

    default:
      chatStore.showDownload = true
      break
  }
}
</script>

<style scoped lang="scss">
.chat-input {
  width: 100%;
  height: fit-content;
  padding-bottom: 0.275rem;
  padding-top: 0.105rem;
  .tools {
    width: 100%;
    margin-bottom: 0.105rem;
    display: flex;
    column-gap: 0.045rem;
    user-select: none;
    .tool {
      width: fit-content;
      height: 0.2175rem;
      border-radius: 0.18rem;
      display: flex;
      align-items: center;
      padding: 0 0.0825rem;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(0.45rem);
      cursor: pointer;
      img {
        width: 0.1275rem;
        min-width: 0.1275rem;
        height: 0.1275rem;
        margin-right: 0.03rem;
      }
      span {
        font-size: 0.09rem;
        font-weight: 500;
        white-space: nowrap;
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }

  .my-input {
    width: 100%;
    // min-height: 0.36rem;
    padding: 0 0.045rem;
    border-radius: 0.18rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(0.075rem);
    display: flex;
    align-items: center;
    overflow: hidden;

    :deep(.arco-textarea-wrapper) {
      background: none;
      padding-left: 0.06rem;
      padding-right: 0;
      border: none;
      font-size: 0.105rem;
      font-weight: 400;
      line-height: 0.18rem;
      color: rgba(255, 255, 255, 0.9);
      textarea {
        padding: 0.09rem 0;
        &::-webkit-input-placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    :deep(.sending) {
      height: fit-content;
      svg {
        font-size: 0.24rem;
      }
    }
    button[send] {
      width: 0.27rem;
      min-width: 0.27rem;
      height: 0.27rem;
      margin-left: 0.06rem;
      background: none;
      img {
        width: 100%;
        height: 100%;
      }
      &[disabled] {
        background: none;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .chat-input {
    width: 100%;
    height: fit-content;
    padding-bottom: 7.3333vw;
    padding-top: 2.6667vw;
    .tools {
      width: 100%;
      margin-bottom: 2.1333vw;
      display: flex;
      column-gap: 1.6vw;
      user-select: none;
      .tool {
        width: fit-content;
        height: 7.2vw;
        border-radius: 6.4vw;
        display: flex;
        align-items: center;
        padding: 0 3.2vw;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: none;
        border: 0.8px solid rgba(255, 255, 255, 0.5);
        img {
          display: none;
        }
        span {
          font-size: 3.2vw;
          font-weight: 400;
          white-space: nowrap;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.3);
        }
      }
    }

    .my-input {
      width: 100%;
      padding: 0 1.0667vw 0 2.6667vw;
      border-radius: 6.4vw;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: none;
      display: flex;
      align-items: center;
      overflow: hidden;

      :deep(.arco-textarea-wrapper) {
        background: none;
        padding-left: 1.6vw;
        padding-right: 0;
        border: none;
        font-size: 3.7333vw;
        font-weight: 400;
        line-height: 6.4vw;
        color: rgba(255, 255, 255, 0.9);
        textarea {
          padding: 2.6667vw 0;
          &::-webkit-input-placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
      :deep(.sending) {
        height: fit-content;
        svg {
          font-size: 6.4vw;
        }
      }
      button[send] {
        position: relative;
        width: 9.6vw;
        min-width: 9.6vw;
        height: 9.6vw;
        margin-left: 1.6vw;
        background: none;
        img {
          width: 100%;
          height: 100%;
        }
        &[disabled] {
          img {
            display: none;
          }
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: url(~/assets/images/a16-2.webp);
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}
</style>
