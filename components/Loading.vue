<template>
  <div class="loading-dialog">
    <a-spin :size="32" />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.loading-dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: grid;
  place-content: center;
  background: rgba(0,0,0,.8);
}
</style>
