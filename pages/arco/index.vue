<script lang="ts" setup>
import { Message, Notification } from '@arco-design/web-vue'
import { IconHeart, IconMessage, IconStar } from '@arco-design/web-vue/es/icon'
import type { Ref } from 'vue'

definePageMeta({
  title: 'ARCO示例',
  sort: 3
})

const date = ref('2022-12-12')
const modalVisible: Ref<boolean> = ref(false)
function onModal() {
  modalVisible.value = true
}
function modalHandleOk() {
  modalVisible.value = false
}
function modalHandleCancel() {
  modalVisible.value = false
}

const drawerVisible: Ref<boolean> = ref(false)
function onDrawer() {
  drawerVisible.value = true
}
function drawerHandleOk() {
  drawerVisible.value = false
}
function drawerHandleCancel() {
  drawerVisible.value = false
}
function onNotification() {
  Notification.info({
    title: 'Notification',
    content: 'This is a notification!'
  })
}
function onMessage() {
  Message.success('成功消息')
}
</script>

<template>
  <div>
    <div class="text-2xl font-bold">Arco UI</div>
    <a-space direction="vertical">
      <a-space>
        <a-button type="primary"> 按钮示例 </a-button>
        <a-button @click="onNotification"> Notification通知示例 </a-button>
        <a-button type="dashed" @click="onMessage"> message消息示例 </a-button>
        <a-button type="outline" @click="onDrawer"> 抽屉示例 </a-button>
        <a-button type="text" @click="onModal"> 模态框示例 </a-button>
      </a-space>
      <a-date-picker v-model="date" />
    </a-space>
    <a-drawer
      :width="340"
      :visible="drawerVisible"
      unmount-on-close
      @ok="drawerHandleOk"
      @cancel="drawerHandleCancel"
    >
      <template #title> Title </template>
      <div>
        You can cusstomize modal body text by the current situation. This modal
        will be closed immediately once you press the OK button.
      </div>
    </a-drawer>
    <a-modal
      v-model:visible="modalVisible"
      draggable
      @ok="modalHandleOk"
      @cancel="modalHandleCancel"
    >
      <template #title> Title </template>
      <div>
        You can cusstomize modal body text by the current situation. This modal
        will be closed immediately once you press the OK button.
      </div>
    </a-modal>

    <a-comment
      author="Socrates"
      avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      content="Comment body content."
      datetime="1 hour"
    >
      <template #actions>
        <span class="action"> <IconMessage /> Reply </span>
      </template>
      <a-comment
        author="Balzac"
        avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
        content="Comment body content."
        datetime="1 hour"
      >
        <template #actions>
          <span class="action"> <IconMessage /> Reply </span>
        </template>
        <a-comment
          author="Austen"
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp"
          content="Reply content"
          datetime="1 hour"
        >
          <template #actions>
            <span class="action"> <IconMessage /> Reply </span>
          </template>
        </a-comment>
        <a-comment
          author="Plato"
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          content="Reply content"
          datetime="1 hour"
        >
          <template #actions>
            <span class="action"> <IconMessage /> Reply </span>
          </template>
        </a-comment>
      </a-comment>
    </a-comment>
  </div>
</template>

<style scoped></style>
