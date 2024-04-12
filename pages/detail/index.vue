<template>
  <div class="container">
    <div class="page">
      <div class="banner">
        <div
          class="imgs"
          :style="{ transform: `translateX(-${curIndex * 100}vw)` }"
        >
          <img
            v-for="(img, index) in chatStore.activeUserInfo.imgs"
            :key="index"
            :src="img"
            alt="个人详情大图"
          />
        </div>
      </div>

      <div class="detail">
        <div class="row1">
          <div class="title">
            <h2>Cyndi Elizabeth</h2>
            <img
              v-for="(img, index) in chatStore.activeUserInfo.imgs"
              :key="index"
              :src="img"
              alt="徽章"
              class="badge"
            />
          </div>
          <div class="hot">
            <img src="~/assets/images/a17.webp" alt="热度" />
            389K{{ curIndex }}
          </div>
        </div>
        <div class="row2">
          <div class="tag">Hot Girl</div>
          <div class="tag">Hot Girl</div>
          <div class="tag">Hot Girl</div>
          <div class="tag">Hot Girl</div>
          <div class="tag">Hot Girl</div>
          <div class="tag">Hot Girl</div>
          <div class="tag">Hot Girl</div>
        </div>
        <div class="row3">
          This is a greeting sentence with a maximum of 200 characters.This is a
          greeting sentence with a maximum of 200 characters.This is a greeting
          sentence with a maximum of 200 characters.
        </div>
      </div>

      <div class="detail-footer">
        <div class="change" v-if="chatStore.activeUserInfo.imgs.length">
          <img
            src="~/assets/images/a19.webp"
            alt=""
            v-show="curIndex > 0"
            @click="onPre"
          />
        </div>

        <button class="btn-chat" @click="goChat">Start Chatting</button>
        <div class="change" v-if="chatStore.activeUserInfo.imgs.length">
          <img
            src="~/assets/images/a20.webp"
            alt=""
            v-if="curIndex < chatStore.activeUserInfo.imgs.length - 1"
            @click="onNext"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useChatStore } from '~/stores/chat.store'
import { isMobile } from '~/utils/common'

const chatStore = useChatStore()
const router = useRouter()

if (!isMobile()) {
  router.replace('/chat')
}

definePageMeta({
  layout: false
})

const curIndex = ref(0)
const onPre = () => {
  curIndex.value--
}
const onNext = () => {
  curIndex.value++
}

const goChat = () => {
  router.push({
    path: '/chat',
    params: {
      id: 'card.id'
    }
  })
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}
.page {
  width: 100%;
  padding: 0;
  height: fit-content;

  .banner {
    position: relative;
    width: 100%;
    height: 120.6667vw;
    .imgs {
      position: absolute;
      top: 0;
      width: fit-content;
      height: 100%;
      display: flex;
      align-items: center;
      transition: transform 0.3s ease;
      img {
        width: 100vw;
        object-fit: cover;
      }
    }
  }
  .detail {
    position: relative;
    z-index: 1;
    width: 100%;
    height: fit-content;
    min-height: calc(100vh - 110.2667vw);
    padding: 6.4vw 6.4vw 23.3333vw 6.4vw;
    margin-top: -10vw;
    border-radius: 5.3333vw 5.3333vw 0 0;
    background: #000;

    .row1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        display: flex;
        align-items: center;
        h2 {
          margin-right: 1.6vw;
          font-size: 5.3333vw;
          font-weight: 600;
          line-height: 5.8667vw;
          color: #ffffff;
          white-space: nowrap;
        }
        .badge {
          width: 4.2667vw;
          height: 4.2667vw;
          margin-right: 1.4667vw;
        }
      }
      .hot {
        font-size: 3.7333vw;
        font-weight: 400;
        line-height: 5.3333vw;
        color: #ffffff;
        display: flex;
        align-items: center;
        img {
          height: 4vw;
          margin-right: 2.4427vw;
        }
      }
    }

    .row2 {
      margin-top: 3.2vw;
      display: flex;
      flex-wrap: wrap;
      gap: 1.0667vw;
      .tag {
        width: fit-content;
        height: 18px;
        padding: 0 2.1333vw;
        border-radius: 3.2vw;
        display: grid;
        place-content: center;
        background: rgba(255, 255, 255, 0.3);
        white-space: nowrap;
        font-size: 2.6667vw;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .row3 {
      margin-top: 3.2vw;
      font-size: 3.2vw;
      font-weight: 400;
      line-height: 5.3333vw;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .detail-footer {
    position: fixed;
    left: 0;
    bottom: 8.5333vw;
    z-index: 1;
    width: 100%;
    padding: 0 4.2667vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .change {
      width: 8.5333vw;
      height: 8.5333vw;
      img {
        width: 100%;
        height: 100%;
      }
      &:first-of-type {
        margin-right: 4.5333vw;
      }
      &:last-of-type {
        margin-left: 4.5333vw;
      }
    }
    .btn-chat {
      flex: 1;
      height: 11.7333vw;
      margin: 0 1px;
      border-radius: 6.4vw;
      background: #ffa13a;
      font-size: 4.8vw;
      font-weight: 600;
      font-variation-settings: 'opsz' auto;
      color: #000000;
      text-shadow: 0px 4px 10px rgba(190, 190, 190, 0.302);
    }
  }
}

@media screen and (min-width: 480px) {
  .container {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 480px;
    overflow: hidden;
    ::-webkit-scrollbar {
      display: none !important;
    }
    .banner {
      position: relative;
      width: 100%;
      height: 100vh;
      .imgs {
        position: absolute;
        top: 0;
        width: fit-content;
        height: 100%;
        display: flex;
        align-items: center;
        transition: transform 0.3s ease;
        img {
          width: 100vw;
          object-fit: cover;
        }
      }
    }
    .detail {
     display: none;
    }
    .detail-footer{
      display: none;
    }
  }
}
</style>
