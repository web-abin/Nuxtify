<template>
  <div class="layout" @scroll="onScroll">
    <Layout-Header />

    <main>
      <Layout-Aside />
      <div class="content">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: fit-content;
  padding-top: var(--header-height);
  display: flex;
  flex-wrap: wrap;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
  main {
    position: relative;
    width: 1200px;
    max-width: 90vw;
    height: fit-content;
    margin-top: 0.16rem;
    display: flex;
    justify-content: space-between;
    column-gap: 0.16rem;
    .content {
      width: calc(100% - var(--aside-width) - 0.16rem);
      height: fit-content;
      min-height: calc(100vh - var(--header-height));
      padding: 0.16rem;
      border-radius: 4px;
      background: var(--background-panel);
    }
  }
}
</style>
