<template>
  <a-modal
    v-model:visible="systemStore.showProfile"
    :hide-title="true"
    modalClass="profile-modal"
  >
    <div class="block" @click.stop>
      <img :src="userStore.userInfo.avatar" alt="头像" class="avatar" />
      <p class="nickname" @click="showMenu = true">
        {{ userStore.userInfo.alias }}
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

      <p class="btn-signout" @click="userStore.logout">Sign out</p>
    </div>
  </a-modal>
</template>

<script setup>
import { Message } from '@arco-design/web-vue'
import { useUserStore } from '~/stores/user.store.ts'
import { useChargeStore } from '~/stores/charge.store.ts'
import { useSystemStore } from '~/stores/system.store.ts'

const chargeStore = useChargeStore()
const userStore = useUserStore()
const systemStore = useSystemStore()

const {
  public: { origin }
} = useRuntimeConfig()

const handleRecharge = () => {
  systemStore.showProfile = false
  chargeStore.showCharge = true
}

const goLink = (link) => {
  window.open(link)
}
</script>

<style scoped lang="scss">
.block {
  width: 5.25rem;
  height: fit-content;
  padding: 0.255rem 0.51rem 0.24rem 0.51rem;
  border-radius: 0.225rem;
  background: #000000;
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  .avatar {
    width: 0.54rem;
    height: 0.54rem;
    border-radius: 50%;
  }
  .nickname {
    margin-top: 0.12rem;
    font-size: 0.135rem;
    font-weight: 400;
    line-height: 1.5;
    color: #ffffff;
  }
  .coin {
    width: 4.2225rem;
    height: 0.66rem;
    padding: 0 0.24rem;
    margin-top: 0.215rem;
    margin-bottom: 0.21rem;
    border-radius: 0.12rem;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > span {
      font-size: 0.15rem;
      font-weight: 600;
      color: #ffffff;
    }
    & > div {
      img {
        width: 0.28rem;
        height: 0.28rem;
        margin-right: 0.04rem;
      }
      span {
        font-size: 0.1725rem;
        font-weight: 500;
        line-height: 0.195rem;
        color: #ffffff;
        text-shadow: 0px 1.5px 4.5px rgba(22, 45, 48, 0.1);
      }
    }
  }
  ul {
    width: 100%;
    list-style: none;
    li {
      margin-bottom: 0.21rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      &:last-of-type {
        margin-bottom: 0;
      }
      div {
        font-size: 0.12rem;
        font-weight: 400;
        line-height: 12px;
        color: #ffffff;
        display: flex;
        align-items: center;
        img {
          width: 0.15rem;
          height: 0.15rem;
          margin-right: 0.06rem;
        }
      }
      .icon-arrow {
        width: 0.15rem;
        height: 0.15rem;
      }
    }
  }
  .btn-signout {
    margin-top: 0.345rem;
    width: 100%;
    text-align: center;
    font-size: 0.135rem;
    font-weight: 500;
    line-height: 1;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
}
</style>
