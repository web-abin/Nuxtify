<template>
  <a-modal
    v-model:visible="showModal"
    :hide-title="true"
    modalClass="login-modal"
  >
    <form class="form">
      <p class="form-title">登录Nutify体验更多功能</p>
      <div class="input-container">
        <input placeholder="Enter email" type="email" />
        <span>
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </span>
      </div>
      <div class="input-container">
        <input placeholder="Enter password" type="password" />

        <span>
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
            <path
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </span>
      </div>
      <button class="submit" type="button" @click="handleLogin">
        登录 / 注册
      </button>

      <button class="submit" type="button" @click="handleMockLogin">
        模拟登录
      </button>

      <div class="protocol">
        注册登录即表示同意
        <a
          :href="`${locationOrigin}/protocol/agreement.html`"
          rel="nofollow"
          target="_blank"
          >用户协议</a
        >
        和
        <a
          :href="`${locationOrigin}/protocol/service.html`"
          rel="nofollow"
          target="_blank"
          >隐私政策</a
        >
      </div>
    </form>
  </a-modal>
</template>

<script setup>
import { Message } from '@arco-design/web-vue'
import { useUserStore } from '~/stores/user.store.ts'

const userStore = useUserStore()
const { $sensors } = useNuxtApp()

const {
  public: { env, origin: locationOrigin }
} = useRuntimeConfig()

// 显示登录弹窗
const showModal = ref(false)
defineExpose({
  showModal
})

// 登录中
const loading = ref(false)

// 关闭
const handleClose = () => {
  loading.value = false
  showModal.value = false
}

const handleLogin = async () => {
  await userStore.postLogin()
  showModal.value = false
}

const handleMockLogin = async () => {
  await userStore.mockLogin()
  showModal.value = false
}
</script>

<style scoped lang="scss">
.form {
  background-color: #fff;
  display: block;
  padding: 0.16rem 0.32rem;
  max-width: 500px;
  border-radius: 0.06rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  .form-title {
    margin-bottom: 0.16rem;
    font-size: 0.2rem;
    line-height: 1.5;
    font-weight: 600;
    text-align: left;
    color: #000;
  }

  .input-container {
    position: relative;
  }

  .input-container input {
    outline: none;
    border: 1px solid #e5e7eb;
    margin: 0.08rem 0;
    background-color: #fff;
    padding: 0.1rem;
    padding-right: 0.3rem;
    font-size: 0.14rem;
    line-height: 1;
    width: 300px;
    border-radius: 0.04rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .input-container span {
    display: grid;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    place-content: center;
  }

  .input-container span svg {
    color: #9ca3af;
    width: 0.16rem;
    height: 0.16rem;
  }

  .submit {
    display: block;
    height: 0.4rem;
    margin-top: 0.2rem;
    background-color: #1e80ff;
    color: #ffffff;
    font-size: 0.14rem;
    font-weight: 500;
    width: 100%;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  .protocol {
    width: 3.2925rem;
    margin-top: 0.12rem;
    font-size: 0.14rem;
    font-weight: 400;
    line-height: 0.18rem;
    text-align: center;
    color: #8a919f;
    a {
      display: inline-block;
      margin: 0 0.05rem;
      position: relative;
      font-weight: 500;
      color: #1e80ff;
      text-decoration: none;
    }
  }
}
</style>
