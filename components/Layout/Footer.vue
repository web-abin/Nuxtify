<template>
  <footer>
    <nuxt-link to="/" class="menu" exact>
      <img
        v-show="route.path !== '/'"
        src="~/assets/images/g1.webp"
        alt="首页"
      />
      <img
        v-show="route.path === '/'"
        src="~/assets/images/g1-2.webp"
        alt="首页"
      />
    </nuxt-link>
    <nuxt-link to="/chat" class="menu" exact>
      <img
        v-show="route.path !== '/chat'"
        src="~/assets/images/g2.webp"
        alt="聊天"
      />
      <img
        v-show="route.path === '/chat'"
        src="~/assets/images/g2-2.webp"
        alt="聊天"
      />
      <p class="msg-count">{{ chatStore.messageCount }}</p>
    </nuxt-link>
    <nuxt-link to="/user" class="menu" exact>
      <img
        v-show="route.path !== '/user'"
        src="~/assets/images/g3.webp"
        alt="个人中心"
      />
      <img
        v-show="route.path === '/user'"
        src="~/assets/images/g3-2.webp"
        alt="个人中心"
      />
    </nuxt-link>
  </footer>
</template>

<script setup>
import { useChatStore } from '~/stores/chat.store'
const chatStore = useChatStore()

const route = useRoute()
</script>

<style scoped lang="scss">
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: var(--footer-height);
  padding: 2.1333vw 12.8vw;
  background: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .menu {
    position: relative;
    width: 10.6667vw;
    height: 10.6667vw;
    img {
      width: 100%;
      height: 100%;
    }
    .msg-count {
      position: absolute;
      top: 0.8vw;
      right: 0.2667vw;
      width: fit-content;
      min-width: 3.7333vw;
      height: 3.7333vw;
      padding: 0 0.4vw;
      border-radius: 2.6667vw;
      background: #EC3460;
      white-space: nowrap;
      font-size: 2.6667vw;
      font-weight: 600;
      line-height: 1;
      color: #ffffff;
      display: grid;
      place-content: center;
    }
  }
}

@media screen and (min-width: 480px) {
  footer {
    display: none !important;
  }
}
</style>
