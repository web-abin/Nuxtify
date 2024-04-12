<template>
  <a-drawer
    v-model:visible="showModal"
    :hide-title="true"
    class="login-drawer"
    placement="bottom"
    :closable="false"
    :header="false"
    :footer="false"
  >
    <div class="block" @click.stop>
      <img
        src="~/assets/images/a18.webp"
        alt="关闭登录"
        class="icon-close"
        @click="handleClose"
      />

      <h2>Log In/Sign Up</h2>
      <button class="login-item facebook" @click="handleLoginByFacebook">
        <img src="~/assets/images/facebook.webp" alt="facebook" />
        <span>Sign in with Facebook</span>
      </button>

      <div class="login-item google">
        <div class="google-ui">
          <img src="~/assets/images/google.webp" alt="google登录" />
          <span>Sign in with Google</span>
        </div>
        <GoogleSignInButton
          class="google-btn"
          @success="handleLoginByGoogle"
          @error="handleLoginError"
        >
        </GoogleSignInButton>
      </div>

      <button class="login-item facebook" @click="onLoginByApple">
        <div
          id="appleid-signin"
          data-color="black"
          data-border="true"
          data-type="sign in"
        ></div>
        <img src="~/assets/images/apple.webp" alt="Apple ID" />
        <span>Sign in with Apple ID</span>
      </button>

      <div v-if="env !== 'production'" class="login-item" @click="mockLogin">
        <span>模拟登录</span>
      </div>

      <div class="protocol">
        By continuing，you agree to our<br />
        <a :href="`${locationOrigin}/protocol/agreement-en.html`" rel="nofollow"
          >User Agreement</a
        >
        and
        <a :href="`${locationOrigin}/protocol/service-en.html`" rel="nofollow"
          >Privacy Policy</a
        >
      </div>
    </div>
  </a-drawer>
</template>

<script setup>
import { Message } from '@arco-design/web-vue'
import { GoogleSignInButton } from 'vue3-google-signin'
import { initFacebookSdk } from '~/utils/facebook'
import { initAppleID } from '~/utils/appleid'
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

onMounted(() => {
  nextTick(() => {
    initFacebookSdk()
    initAppleID(handleLoginByGoogleSucess, handleLoginByGoogleFail)
  })
})
// facebook登录
const handleLoginByFacebook = async () => {
  loading.value = true
  try {
    FB || (await initAppleID())
    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        postLogin(response.authResponse, 'meta', 'Facebook')
      } else {
        // 未登录，fb会让用户登录
        FB.login((res) => {
          if (res.status === 'connected') {
            postLogin(res.authResponse, 'meta', 'Facebook')
          } else {
            loading.value = false
            Message.error('Login error')
          }
        })
      }
    })
  } catch (error) {
    console.error('Failed to initialize Facebook SDK', error)
    loading.value = false
    Message.error('Login error')
  }
}

// 谷歌登录成功
const handleLoginByGoogle = (response) => {
  sensorLogin('Google', true)
  postLogin(response, 'google', 'Google')
}
// 谷歌登录失败
const handleLoginError = () => {
  sensorLogin('Google', false, '谷歌调取失败')
  loading.value = false
}

// 苹果登录
const onLoginByApple = async () => {}
// 苹果登录成功
const handleLoginByGoogleSucess = (response) => {
  sensorLogin('AppleID', true)
  postLogin(response, 'AppleID', 'AppleID')
}
// 苹果登录失败
const handleLoginByGoogleFail = () => {
  sensorLogin('AppleID', false, '苹果登录失败')
  loading.value = false
}

const mockLogin = async () => {
  loading.value = true
  const params = {
    google_id:
      '802818305618-0mq1mg94kdmf43p2sovuq68bhj5p38gi.apps.googleusercontent.com',
    clientId:
      '802818305618-0mq1mg94kdmf43p2sovuq68bhj5p38gi.apps.googleusercontent.com',
    client_id:
      '802818305618-0mq1mg94kdmf43p2sovuq68bhj5p38gi.apps.googleusercontent.com',
    credential:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4YmY1YzM3NzJkZDRlN2E3MjdhMTAxYmY1MjBmNjU3NWNhYzMyNmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3NDIxMzczMjU5MTMtajZ0bjJkazk2djEyOGJsN29jdWYxajYzM25ta2loOHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3NDIxMzczMjU5MTMtajZ0bjJkazk2djEyOGJsN29jdWYxajYzM25ta2loOHIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDAwOTk2NzM1NDQ2NTI3MjM4NzUiLCJlbWFpbCI6Imh1aW1pbnJlbm5pY2VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTcwOTg4OTAzOSwibmFtZSI6Imh1aW1pbiByZW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTERlbkRmRUY0Z0NGUnlUWXNaalZDbVpwcTRJeFEyeVpveWc4dTJ0dGFRPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Imh1aW1pbiIsImZhbWlseV9uYW1lIjoicmVuIiwibG9jYWxlIjoiemgtQ04iLCJpYXQiOjE3MDk4ODkzMzksImV4cCI6MTcwOTg5MjkzOSwianRpIjoiN2U5Yzg3MjBjMTY2N2YzZDNkN2M2MGI2NGM3ZWMxZjcxMTUzNmVhMyJ9.Wbb13ct7n5Nxm6a_fuGVywMFq3LmRnRVVPlWvXp3RL3s1xm2JPNUCOs_W84GINX3YCnmp9ZV91ujx2NS4m2guEfdAQMjERYmVBLljE3lXNzh2CBv2hysa0SDF5lZpea98bSwfJU7i_egcZxxJ55Or4fFCSxRuEn_KArewiqbXEN2uBG5Ut-lGDyOrOf6MQ-9EnWYbGEdOMLD4YI69GrZDYiZvttd_LhRRqb9mJ2EajyUQv4RX8GaSa4k4W1VtZkq8vb9baG-zBvjPOgtya-vBgGiX39QH5wE9IO7WPs0sF6LzEFVrQZsVPMN8qYctweDnYMYIwWOK-tIv6yIf23_ig',
    select_by: 'btn',
    login_type: 'google',
    seed: 1709889339571,
    apikey: 'apikey_xv9q1mrbmvf2mryv8',
    sign: 'CAC8B3561CBD6882BD48DEDF574D8498'
  }
  const { data, code, msg } = await userStore.getUserInfo(params)
  if (code === 200) {
    Message.success('Login success')
    // location.reload(true)
    handleClose()
  } else {
    Message.error(msg)
    loading.value = false
  }
}

// 登录
const postLogin = async (response, type, platform) => {
  console.log({ response, type, platform })
  const param = response
  param.login_type = type
  const res = await userStore.getUserInfo(param)
  if (res.code == 200) {
    Message.success('Login success')
    sensorLogin(platform, true, '', true)
    handleClose()
  } else {
    Message.error('Login error')
    sensorLogin(platform, false, res.msg, '')
  }
  loading.value = false
}

/**
 * 登录埋点
 * @param {*} platform 平台
 * @param {*} is_success 是否登录成功
 * @param {*} fail_reason 失败原因
 * @param {*} is_first_log 是否是第一次触发登录
 */
function sensorLogin(
  platform,
  is_success,
  fail_reason = '',
  is_first_log = false
) {
  $sensors.track('h5_LoginPlatformClick', {
    platform_name: platform,
    is_success: is_success,
    fail_reason: fail_reason,
    is_first_log: !!is_first_log
  })
}
</script>
<style lang="scss">
.login-drawer {
  .arco-drawer {
    border-radius: 5.3333vw 5.3333vw 0px 0px;
    background: #000000;
  }
}
</style>

<style scoped lang="scss">
.block {
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 9.6vw 6.4vw 12.2667vw 6.4vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon-close {
    position: absolute;
    width: 4.2667vw;
    height: 4.2667vw;
    right: 4.2667vw;
    top: 4.2667vw;
  }

  h2 {
    margin-bottom: 8.5333vw;
    font-size: 4.8vw;
    font-weight: 500;
    line-height: 5.6vw;
    color: #ffffff;
  }
  .login-item {
    position: relative;
    width: 100%;
    height: 14.9333vw;
    margin-bottom: 3.2vw;
    border-radius: 16vw;
    border: 1px solid #ffffff;
    background: transparent;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 0.225rem;
      height: 0.225rem;
      margin-right: 0.12rem;
    }
    span {
      font-size: 4.2667vw;
      font-weight: 500;
      line-height: 1;
      font-variation-settings: 'opsz' auto;
      color: #ffffff;
    }
  }
  .google {
    .google-ui {
      position: absolute;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
    }
    :deep(.google-btn) {
      position: absolute;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      .S9gUrf-YoZ4jf {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        & > iframe {
          transform: scale(5);
        }
        & > div {
          position: absolute;
          left: 0;
          width: 100%;
          height: 100%;
          div[role='button'] {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  #appleid-signin {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .protocol {
    margin-top: 3.7333vw;
    width: 74.4vw;
    font-size: 3.2vw;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    a {
      display: inline-block;
      position: relative;
      font-weight: 500;
      color: #ffa13a;
      text-decoration: underline;
    }
  }
}
</style>
