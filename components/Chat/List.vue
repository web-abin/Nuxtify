<template>
  <div class="chat-list">
    <h3 pc>Chat</h3>
    <h3 mobile>Message</h3>
    <div class="scroll-area">
      <div
        v-for="chat in chatStore.chatList"
        :key="chat.id"
        class="chat"
        :class="{ chat_active: chatStore.activeChat.id === chat.id }"
        @click="onSelectChat(chat)"
      >
        <div class="avatar">
          <img
            src="https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF"
            alt="头像"
          />
          <span class="count">12</span>
        </div>

        <div class="chat-body">
          <div class="chat-body-left">
            <div class="chat-title">Cyndi Wang</div>
            <p class="chat-tip">Up to 36 characters Up to 36 ch...</p>
          </div>
          <div class="chat-body-right">
            <p class="chat-time">12:23</p>
            <img
              src="~/assets/images/a3.webp"
              alt="delete chat"
              @click.stop="onDeleteChat(chat)"
            />
          </div>
        </div>
      </div>

      <p class="empty pc" v-if="!chatStore.chatList.length">It's empty</p>

      <div class="empty mobile" v-if="!chatStore.chatList.length">
        <img src="~/assets/images/a5.webp" alt="空聊天" />
        <p>It's empty</p>
      </div>
    </div>

    <chat-delete ref="deleteChatRef" />
  </div>
</template>

<script setup>
import { useChatStore } from '~/stores/chat.store'
import { isMobile } from '~/utils/common'

const chatStore = useChatStore()
const _isMobile = isMobile()
const router = useRouter()

const onSelectChat = (chat) => {
  chatStore.activeChat = chat
  if (_isMobile) router.push('/chat/ai')
}

const deleteChatRef = ref(null)
const selectedChat = ref({})
const onDeleteChat = (chat) => {
  selectedChat.value = chat
  deleteChatRef.value.showModal = true
}
</script>

<style scoped lang="scss">
.chat-list {
  width: 2.815rem;
  height: 100%;
  padding: 0.3325rem 0.12rem;
  background: #000000;

  h3 {
    margin-bottom: 0.1275rem;
    font-size: 0.195rem;
    font-weight: 500;
    line-height: 0.1575rem;
    font-variation-settings: 'opsz' auto;
    color: #ffffff;
  }
  h3[mobile] {
    display: none;
  }

  .scroll-area {
    width: 100%;
    height: 100%;
    padding-bottom: 1rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .empty {
      color: rgba(255, 255, 255, 0.3);
    }
    .empty.mobile {
      display: none;
    }
    .chat {
      width: 100%;
      height: 0.525rem;
      padding: 0.075rem;
      margin-bottom: 0.075rem;
      border-radius: 0.105rem;
      transition: background 0.2s ease;
      display: flex;
      align-items: center;

      &.chat_active {
        background: rgba(255, 255, 255, 0.1);
      }

      .avatar {
        position: relative;
        width: 0.375rem;
        height: 0.375rem;
        min-width: 0.375rem;
        margin-right: 0.09rem;
        user-select: none;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          object-fit: cover;
        }
        .count {
          position: absolute;
          right: -0.0225rem;
          top: 0.0075rem;
          min-width: 0.105rem;
          height: 0.105rem;
          padding: 0 0.0188rem;
          border-radius: 0.06rem;
          background: #ec3460;
          font-size: 0.075rem;
          font-weight: 500;
          line-height: 1;
          color: #ffffff;
          display: grid;
          place-content: center;
          white-space: nowrap;
        }
      }
      .chat-body {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        &-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          .chat-title {
            margin-bottom: 0.045rem;
            font-size: 0.12rem;
            font-weight: 400;
            line-height: 0.165rem;
            font-variation-settings: 'opsz' auto;
            color: #ffffff;
          }
          .chat-tip {
            font-size: 0.105rem;
            font-weight: 400;
            line-height: 0.12rem;
            color: rgba(255, 255, 255, 0.6);
          }
        }
        &-right {
          height: 100%;
          padding-top: 0.02rem;
          padding-bottom: 0.0275rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          .chat-time {
            font-size: 0.075rem;
            font-weight: 400;
            line-height: 0.09rem;
            color: rgba(255, 255, 255, 0.6);
          }
          img {
            width: 0.12rem;
            height: 0.12rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .chat-list {
    width: 100%;
    padding: 0 4.2667vw;

    h3 {
      height: 13.8667vw;
      margin-bottom: 3.7333vw;
      font-size: 4.8vw;
      font-weight: 600;
      line-height: 13.8667vw;
      font-variation-settings: 'opsz' auto;
      color: rgba(255, 255, 255, 0.9);
    }
    h3[pc] {
      display: none;
    }
    h3[mobile] {
      display: block;
    }

    .scroll-area {
      width: 100%;
      height: calc(100% - 21.8667vw);
      padding-bottom: var(--footer-height);
      &::-webkit-scrollbar {
        display: none;
      }
      .empty.pc {
        display: none;
      }
      .empty.mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20%;
        img {
          width: 50.6667vw;
          height: 34.6667vw;
        }
        p {
          margin-top: 2.1333vw;
          font-size: 3.7333vw;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
        }
      }
      .chat {
        width: 100%;
        height: fit-content;
        padding: 0;
        margin-bottom: 6.9333vw;
        border-radius: 0;
        transition: none;
        display: flex;
        align-items: flex-end;

        &.chat_active {
          background: unset;
        }

        .avatar {
          position: relative;
          width: 10.6667vw;
          height: 10.6667vw;
          min-width: 10.6667vw;
          margin-right: 2.6667vw;
          .count {
            position: absolute;
            right: -0.5333vw;
            top: 0.2667vw;
            width: fit-content;
            min-width: 3.7333vw;
            height: 3.7333vw;
            border-radius: 2.1333vw;
            background: #ec3460;
            font-size: 2.6667vw;
            font-weight: 500;
          }
        }
        .chat-body {
          flex: 1;
          height: 100%;
          cursor: pointer;
          &-left {
            .chat-title {
              margin-bottom: 1.0667vw;
              font-size: 4.2667vw;
              font-weight: 400;
              line-height: 5.8667vw;
            }
            .chat-tip {
              font-size: 3.7333vw;
              font-weight: 400;
              line-height: 4.2667vw;
            }
          }
          &-right {
            height: 100%;
            padding-top: 0.2667vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .chat-time {
              font-size: 2.6667vw;
              font-weight: 400;
              line-height: 3.2vw;
              color: rgba(255, 255, 255, 0.6);
            }
            img {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
