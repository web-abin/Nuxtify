<template>
  <aside>
    <nuxt-link to="/" class="menu" active-class="menu_active" exact>
      <img src="~/assets/images/b1.webp" alt="首页图标" />
      Home
    </nuxt-link>
    <nuxt-link to="/chat" class="menu" active-class="menu_active" exact>
      <img src="~/assets/images/b2.webp" alt="聊天图标" />
      Chat
    </nuxt-link>
  </aside>
</template>

<script setup></script>

<style scoped lang="scss">
aside {
  position: relative;
  z-index: 1;
  width: var(--aside-width);
  height: calc(100vh - var(--header-height));
  padding: 0.3rem;
  background: var(--background-panel);
  .menu {
    width: 100%;
    height: 0.48rem;
    margin-bottom: 0.16rem;
    border-radius: 0.12rem;
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
    border: 1.5px solid rgba(255, 255, 255, 0.1);
    font-size: 0.15rem;
    font-weight: 500;
    font-variation-settings: 'opsz' auto;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    img {
      width: 0.165rem;
      height: 0.165rem;
      margin-right: 0.09rem;
    }
    &_active {
      border: none;
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
    }
  }
}

@media screen and (max-width: 480px) {
  aside {
    display: none;
  }
}
</style>
