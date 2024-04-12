<template>
  <div class="page">
    <img
      :src="userStore.userInfo.avatar || defaultAvatar"
      alt="头像"
      class="avatar"
    />
    <p class="nickname" @click="showMenu = true">
      {{ userStore.userInfo.alias || 'Not logged in' }}
    </p>
    <div class="coin" @click="handleRecharge">
      <span>XCoin</span>
      <div class="flex">
        <img src="~/assets/images/a9.webp" alt="金币图标" />
        <span>{{ userStore.userInfo.coins_balance || 0 }}</span>
      </div>
    </div>

    <ul>
      <li @click="goLink(`${origin}/protocol/agreement-en.html`)">
        <div>
          <img src="~/assets/images/c1.webp" alt="User terms" />
          <span>User terms</span>
        </div>
        <img src="~/assets/images/a10.webp" alt="right" class="icon-arrow" />
      </li>
      <li @click="goLink(`${origin}/protocol/service-en.html`)">
        <div>
          <img src="~/assets/images/c2.webp" alt="Privacy terms" />
          <span>Privacy terms</span>
        </div>
        <img src="~/assets/images/a10.webp" alt="right" class="icon-arrow" />
      </li>
      <li @click="goLink(`${origin}/protocol/service-en.html`)">
        <div>
          <img src="~/assets/images/c3.webp" alt="Feedback" />
          <span>Feedback</span>
        </div>
        <img src="~/assets/images/a10.webp" alt="right" class="icon-arrow" />
      </li>
      <li @click="goLink('https://app.adjust.com/17i7dbt8')">
        <div>
          <img src="~/assets/images/c4.webp" alt="Download" />
          <span>Download</span>
        </div>
        <img src="~/assets/images/a10.webp" alt="right" class="icon-arrow" />
      </li>
    </ul>

    <p v-if="userStore.token" class="btn-signout" @click="userStore.logout">
      Sign out
    </p>

    <p v-else class="btn-signout" @click="onLogin">Login In</p>

    <login-popup ref="loginRef" />

    <Layout-Footer />
  </div>
</template>

<script setup>
import { Message } from '@arco-design/web-vue'
import { useUserStore } from '~/stores/user.store.ts'
import { useChargeStore } from '~/stores/charge.store.ts'
import { useSystemStore } from '~/stores/system.store.ts'
import defaultAvatar from '~/assets/images/avatar.webp'
import { isMobile } from '~/utils/common'

const router = useRouter()
const systemStore = useSystemStore()

if (!isMobile()) {
  router.replace('/')
}

const chargeStore = useChargeStore()
const userStore = useUserStore()

definePageMeta({
  layout: false
})

const {
  public: { origin }
} = useRuntimeConfig()

const handleRecharge = () => {
  showModal.value = false
  chargeStore.showCharge = true
}

const loginRef = ref(null)
const onLogin = () => {
  loginRef.value.showModal = true
}

const goLink = (link) => {
  window.open(link)
}
</script>

<style scoped lang="scss">
.page {
  width: 100%;
  height: fit-content;
  padding: 0 3.2vw;
  padding-bottom: var(--footer-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  .avatar {
    width: 23.4667vw;
    height: 23.4667vw;
    margin-top: 11.7333vw;
    border-radius: 50%;
  }
  .nickname {
    margin-top: 3.2vw;
    font-size: 4.8vw;
    font-weight: 500;
    line-height: 1.5;
    color: #ffffff;
  }
  .coin {
    width: 100%;
    height: 23.4667vw;
    padding: 0 5.3333vw;
    margin-top: 6.9333vw;
    margin-bottom: 6.9333vw;
    border-radius: 3.2vw;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > span {
      font-size: 5.3333vw;
      font-weight: 600;
      color: #ffffff;
    }
    & > div {
      img {
        width: 7.4667vw;
        height: 7.4667vw;
        margin-right: 1.0667vw;
      }
      span {
        font-size: 5.8667vw;
        font-weight: 500;
        color: #ffffff;
        text-shadow: 0px 2px 6px rgba(22, 45, 48, 0.1);
      }
    }
  }
  ul {
    width: 100%;
    list-style: none;
    li {
      margin-bottom: 7.4667vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      &:last-of-type {
        margin-bottom: 0;
      }
      div {
        font-size: 4.2667vw;
        font-weight: 400;
        line-height: 1;
        color: #ffffff;
        display: flex;
        align-items: center;
        img {
          width: 5.3333vw;
          height: 5.3333vw;
          margin-right: 2.1333vw;
        }
      }
      .icon-arrow {
        width: 5.3333vw;
        height: 5.3333vw;
      }
    }
  }
  .btn-signout {
    margin-top: 17.8667vw;
    width: 100%;
    text-align: center;
    font-size: 4.2667vw;
    font-weight: 500;
    line-height: 1;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
}

:deep(footer) {
  background: #121214;
}

@media screen and (min-width: 480px) {
  .page {
    position: absolute;
    top: 0;
    left: 50%;
    transform-origin: center top;
    transform: translateX(-50%) scale(0.4);
  }
}
</style>
