<template>
  <div class="layout">
    <Layout-Header />
    <Layout-Aside />

    <main class="content">
      <slot />
    </main>

    <Layout-Footer />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-wrap: wrap;
  .content {
    position: relative;
    width: calc(100% - var(--aside-width));
    height: calc(100vh - var(--header-height));
  }
}

@media (max-width: 480px) {
  .layout {
    .content {
      width: 100%;
      height: calc(100vh - var(--header-height) - var(--footer-height));
    }
  }
}
</style>
