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
    overflow: hidden;
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

@media screen and (max-width: 480px) {
  .layout {
    main {
      padding-bottom: 17.0667vw;
      :deep(aside) {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;
        width: 100vw;
        height: 13.8667vw;
        display: flex;
        align-items: center;
        overflow-x: scroll;
        a {
          white-space: nowrap;
          width: fit-content;
          height: fit-content;
          padding: 2.1333vw 3.2vw;
          margin: 0;
        }
      }
    }
  }
}
</style>
