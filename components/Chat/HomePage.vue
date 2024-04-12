<!-- 个人主页 -->
<template>
  <div class="home-page">
    <a-carousel class="my-swiper" :default-current="2">
      <a-carousel-item
        v-for="image in chatStore.activeUserInfo.imgs"
        :key="image"
      >
        <img
          :src="image"
          :style="{
            width: '100%'
          }"
        />
      </a-carousel-item>
    </a-carousel>

    <div class="user-info">
      <div class="info1">
        <span>Cyndi Elizabeth</span>
        <p><img src="~/assets/images/a4.webp" alt="热度" />389K</p>
      </div>

      <div class="info2">
        <div class="tag" v-for="tag in 3" :key="tag">American</div>
      </div>
      <h4>Introduce</h4>
      <p class="info3">
        This is a greeting sentence with a maximum of 200 characters.This is a
        greeting sentence with a maximum of 200 characters.
      </p>
    </div>
  </div>
</template>
<script setup>
import { useChatStore } from '~/stores/chat.store'

const chatStore = useChatStore()
</script>

<style scoped lang="scss">
.home-page {
  width: 3.6rem;
  height: 100%;
  background: #000000;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  :deep(.my-swiper) {
    width: 100%;
    height: 5.3952rem;
    img {
      height: 100%;
      object-fit: cover;
    }
    .arco-carousel-indicator-wrapper-bottom {
      bottom: .6rem;
      .arco-carousel-indicator-dot .arco-carousel-indicator-item{
        width: .075rem;
        height: .075rem;
      }
    }
    .arco-carousel-arrow {
      & > div {
        width: 0.33rem;
        height: 0.33rem;
        background: rgba(255, 255, 255, 0.5);
        svg {
          font-size: 0.2rem;
        }
      }
    }
  }
  .user-info {
    position: relative;
    z-index: 1;
    width: 100%;
    height: fit-content;
    min-height: calc(100% - 5.4rem);
    padding: 0.19rem .14rem;
    border-radius: 0.2rem 0.2rem 0px 0px;
    margin-top: -0.58rem;
    background: #000000;
    .info1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > span {
        font-size: 0.225rem;
        font-weight: 600;
        line-height: 0.2475rem;
        color: #ffffff;
      }
      & > p {
        font-size: 0.1575rem;
        font-weight: 400;
        line-height: 1;
        color: #ffffff;
        display: flex;
        align-items: center;
        img {
          width: 0.18rem;
          height: 0.18rem;
          margin-right: 0.04rem;
        }
      }
    }
    .info2 {
      margin-top: 0.0825rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 0.08rem;
      row-gap: 0.08rem;
      .tag {
        width: 0.61rem;
        height: 0.24rem;
        border-radius: 0.16rem;
        display: grid;
        place-content: center;
        padding: 0.03rem 0.08rem;
        background: rgba(255, 255, 255, 0.1);
        font-size: 0.1rme;
        font-weight: 500;
        line-height: 1;
        font-variation-settings: 'opsz' auto;
        color: #ffffff;
      }
    }
    h4 {
      margin-top: 0.22rem;
      font-size: 0.1575rem;
      font-weight: 500;
      line-height: 1.5;
      color: #ffffff;
    }
    .info3 {
      margin-top: 0.1025rem;
      font-size: 0.135rem;
      font-weight: 400;
      line-height: 0.225rem;
      color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
