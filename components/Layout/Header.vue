<template>
  <header>
    <div class="logo">
      <span></span>
      <img src="~/assets/images/f1.webp" alt="logo" />
    </div>

    <!-- 未登录 -->
    <div class="right-menu" v-if="!userStore.token">
      <a
        href="https://discord.gg/wvdUSfXh"
        class="discard"
        rel="nofollow external"
        target="_blank"
      >
        <img src="~/assets/images/a1.webp" alt="discard图标" />
      </a>

      <button class="btn-login" @click="goLogin">Sign Up/Log In</button>
    </div>

    <!-- 已登陆 - 个人中心 -->
    <UserCenter v-else />

    <!-- pc端登录 -->
    <Login ref="loginRef" />
    <!-- 移动端登录 -->
    <login-popup ref="loginRef2" />
  </header>
</template>

<script setup>
import { useUserStore } from '~/stores/user.store'
import { isMobile } from '~/utils/common'

const userStore = useUserStore()
const route = useRoute()
const _isMobile = isMobile()

const loginRef = ref(null)
const loginRef2 = ref(null)
const goLogin = () => {
  _isMobile
    ? (loginRef2.value.showModal = true)
    : (loginRef.value.showModal = true)
}
</script>

<style scoped lang="scss">
header {
  position: relative;
  width: 100vw;
  height: var(--header-height);
  padding: 0 0.3rem;
  background: var(--background-panel);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    color: #fff;
    font-size: 30px;
    display: flex;
    align-items: center;
    span {
      display: block;
      width: 0.39rem;
      height: 0.39rem;
      margin-right: 0.1rem;
      border-radius: 0.09rem;
      background: #ffa13a;
    }
    img {
      width: 1.0224rem;
      height: 0.18rem;
    }
  }
  .right-menu {
    display: flex;
    align-items: center;
    .discard {
      width: 0.42rem;
      height: 0.42rem;
      margin-right: 0.13rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .btn-login {
      width: 1.48rem;
      height: 0.42rem;
      max-height: none;
      border-radius: 0.09rem;
      background: #ffa13a;
      font-size: 0.18rem;
      font-weight: 500;
      color: #000000;
      line-height: 1;
      display: grid;
      place-content: center;
    }
  }
}

@media screen and (max-width: 480px) {
  header {
    padding: 0.12rem;
    background: #000000;
    border-bottom: none;
    .logo {
      span {
        display: none;
      }
      img {
        width: 27.264vw;
        height: 4.8vw;
      }
    }
    .right-menu {
      .discard {
        display: none;
      }
      .btn-login {
        width: fit-content;
        height: 5.3333vw;
        padding: 0 1.8667vw;
        border-radius: 4.2667vw;
        font-size: 3.2vw;
      }
    }
  }
}
</style>
