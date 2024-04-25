<template>
  <header>
    <div class="logo">
      <img src="~/assets/images/logo.png" alt="logo" />
      <span>Nuxtify</span>
    </div>

    <!-- 未登录 -->
    <div class="right-menu">
      <a
        href="https://github.com/web-abin/Nuxtify"
        rel="nofollow external"
        target="_blank"
      >
        <img src="~/assets/images/github.png" alt="github" />
      </a>
      <a
        href="https://juejin.cn/user/994399097982728/posts"
        rel="nofollow external"
        target="_blank"
      >
        <img src="~/assets/images/juejin.png" alt="掘金" />
      </a>

      <button v-if="!userStore.token" class="btn-login" @click="goLogin">
        登录/注册
      </button>
      <img
        v-else
        src="https://p3-passport.byteacctimg.com/img/user-avatar/63b937799b5fa48bdcabc4a93ccda542~80x80.awebp"
        alt="头像"
        class="avatar"
      />
    </div>
  </header>

  <Login ref="loginRef" />
</template>

<script setup>
import { useUserStore } from '~/stores/user.store'

const userStore = useUserStore()

const loginRef = ref(null)
const goLogin = () => {
  loginRef.value.showModal = true
}
</script>

<style scoped lang="scss">
header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%;
  height: var(--header-height);
  padding: 0 0.3rem;
  background: var(--background-panel);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: flex;
    align-items: center;
    img {
      width: 0.39rem;
      height: 0.39rem;
      margin-right: 0.1rem;
      // background: #ffa13a;
      overflow: hidden;
    }
    span {
      font-size: 0.25rem;
      font-weight: bolder;
      font-family: serif, cursive;
      line-height: 1;
    }
  }
  .right-menu {
    display: flex;
    align-items: center;
    column-gap: 0.1rem;
    .avatar {
      width: 0.36rem;
      height: 0.36rem;
      border-radius: 50%;
    }
    a {
      width: 0.24rem;
      height: 0.24rem;
      border-radius: 50%;
      overflow: hidden;
      place-content: center;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .btn-login {
      width: fit-content;
      height: 0.36rem;
      padding: 0 0.16rem;
      border-radius: 4px;
      background: #1e80ff;
      font-size: 0.14rem;
      font-weight: 500;
      color: #ffffff;
      line-height: 1;
      display: grid;
      place-content: center;
    }
  }
}
</style>
