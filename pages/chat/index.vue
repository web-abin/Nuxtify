<template>
  <div class="chat-content">
    <!-- 聊天列表 -->
    <Chat-List />
    <template v-if="chatStore.activeChat.id">
      <!-- 聊天窗口 -->
      <Chat-Viewer />
      <!-- 个人主页 -->
      <Chat-HomePage />
    </template>

    <div class="empty" v-else>
      <img src="~/assets/images/a5.webp" alt="空聊天" />
      <p>It's empty</p>
    </div>
  </div>
</template>

<script setup>
import { useChatStore } from '~/stores/chat.store'

const chatStore = useChatStore()
</script>

<style scoped lang="scss">
.chat-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .chat-list {
    flex-shrink: 0;
  }
  .chat-viewer {
    flex: 1;
  }
  .home-page {
    flex-shrink: 0;
  }

  .empty {
    flex: 1;
    height: 100%;
    background: var(--background-panel);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 3.015rem;
      height: 2.067rem;
    }
    p {
      margin-top: 0.09rem;
      margin-bottom: 1rem;
      font-size: 0.15rem;
      font-weight: 400;
      line-height: 1.5;
      color: #ffffff;
    }
  }
}

@import './chat.mobile.scss';
</style>
