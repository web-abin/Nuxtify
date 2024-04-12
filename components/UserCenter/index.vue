<template>
  <!-- pc端 -->
  <div class="user-center pc">
    <img :src="userStore.userInfo.avatar" alt="头像" class="avatar" />
    <p class="nickname">
      {{ userStore.userInfo.alias }}
    </p>
    <img src="~/assets/images/a8.webp" alt="展开图标" class="icon-arrow" />

    <div class="menu">
      <div class="menu-item" @click="onShowProfile">Profile</div>
      <div class="menu-item" @click="userStore.logout">Logout</div>
    </div>

    <UserCenter-Profile />
  </div>

  <!-- 移动端 -->
  <div class="user-center mobile" @click="chargeStore.showCharge = true">
    <img src="~/assets/images/a9.webp" alt="金币图标" />
    <span>86.72</span>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user.store'
import { useChargeStore } from '~/stores/charge.store.ts'
import { useSystemStore } from '~/stores/system.store.ts'

const chargeStore = useChargeStore()
const userStore = useUserStore()
const systemStore = useSystemStore()

const onShowProfile = () => {
  systemStore.showProfile = true
}
</script>

<style scoped lang="scss">
.user-center {
  --show-menu: none;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 100%;
  .avatar {
    width: 0.34rem;
    height: 0.34rem;
    border-radius: 50%;
  }
  .nickname {
    margin-left: 0.11rem;
    margin-right: 0.045rem;
    font-size: 0.15rem;
    font-weight: 400;
    line-height: 1;
    color: #ffffff;
    cursor: default;
  }
  .icon-arrow {
    width: 0.15rem;
    height: 0.15rem;
  }
  &:hover {
    --show-menu: block;
  }

  .menu {
    display: var(--show-menu);
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(calc(100% - 0.03rem));
    width: 1.4175rem;
    height: fit-content;
    padding: 0.09rem 0.105rem;
    border-radius: 0.135rem;
    background: #000000;
    .menu-item {
      width: 100%;
      height: 0.39rem;
      margin-bottom: 0.075rem;
      border-radius: 0.09rem;
      display: grid;
      place-content: center;
      font-size: 0.135rem;
      font-weight: 500;
      line-height: 1;
      color: #ffffff;
      cursor: pointer;
      &:last-of-type {
        margin-bottom: 0;
      }
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
}
.mobile {
  display: none;
}

@media screen and (max-width: 480px) {
  .pc {
    display: none;
  }
  .mobile {
    width: fit-content;
    height: 5.8667vw;
    border-radius: 4.2667vw;
    padding: 0 1.0667vw;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    span {
      font-size: 2.9333vw;
      font-weight: 500;
      line-height: 1;
      color: #ffffff;
    }
    img {
      width: 4.2667vw;
      height: 4.2667vw;
      margin-right: 0.2667vw;
    }
  }
}
</style>
