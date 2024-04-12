<template>
  <a-modal
    v-model:visible="chargeStore.showChargeResult"
    :hide-title="true"
    modalClass="charge-modal"
  >
    <div class="block" @click.stop>
      <template v-if="chargeStore.isPaySusscess">
        <img src="~/assets/images/d2.webp" alt="支付成功" />
        <p>Payment successful</p>
        <button back @click="goHome">Back to Home</button>
        <button success @click="onClose">Payment successful</button>
      </template>

      <template v-else>
        <img src="~/assets/images/d3.webp" alt="支付失败" />
        <p>Payment falled</p>
        <button @click="handleRetry">Try Again</button>
        <div class="back" @click="goHome">Back to Home</div>
      </template>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import { useChargeStore } from '~/stores/charge.store.ts'
import { useUserStore } from '~/stores/user.store'

const chargeStore = useChargeStore()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const payPaySuccess = async () => {
  await chargeStore.getPayPaySuccess({
    token: chargeStore.payToken,
    PayerID: route.query.PayerID
  })
  const data: any = await chargeStore.getChargeStatus({
    pay_platform: 'paypal',
    order_id: chargeStore.orderId
  })
  if (data.code == 200) {
    await userStore.getUser()
  }
}

const payPayCancel = async () => {
  await chargeStore.getPayPayCancel({
    token: chargeStore.payToken,
    PayerID: route.query.PayerID
  })
}

watch(
  () => chargeStore.showChargeResult,
  (val) => {
    if (val) {
      chargeStore.isPaySusscess = route.query.type === 'success'
      chargeStore.payToken = route.query.token

      chargeStore.isPaySusscess ? payPaySuccess() : payPayCancel()
    }
  },
  { immediate: true }
)

const goHome = () => {
  router.push('/')
}

const onClose = () => {
  chargeStore.showChargeResult = false
}
const handleRetry = () => {
  router.push('/')
  chargeStore.showChargeResult = false
  chargeStore.showCharge = true
}
</script>

<style scoped lang="scss">
.block {
  width: 3.87rem;
  height: fit-content;
  padding: 0.53rem 0.545rem 0.45rem 0.545rem;
  border-radius: 0.225rem;
  background: #000000;
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  img {
    width: 0.64rem;
    height: 0.64rem;
  }
  p {
    margin-top: 0.21rem;
    font-size: 0.165rem;
    font-weight: 500;
    font-variation-settings: 'opsz' auto;
    color: #ffffff;
    text-align: center;
  }
  button {
    width: 100%;
    height: 0.54rem;
    margin-top: 0.435rem;
    border-radius: 0.4rem;
    background: #ffa13a;
    font-size: 0.18rem;
    font-weight: 500;
    font-variation-settings: 'opsz' auto;
    color: #000000;
    text-shadow: 0px 4.5px 11.25px rgba(190, 190, 190, 0.302);
    &[success] {
      display: none;
    }
  }
}

@media screen and (max-width: 480px) {
  .block {
    width: 100vw;
    height: 100vh;
    padding: 30% 17.0667vw 0 17.0667vw;
    background: #000000;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    img {
      width: 15.4667vw;
      height: 15.4667vw;
    }
    p {
      margin-top: 6.4vw;
      font-size: 4.2667vw;
      font-weight: 600;
    }
    button {
      position: relative;
      width: 100%;
      height: 12.8vw;
      margin-top: 21.3333vw;
      border-radius: 6.4vw;
      background: #ffa13a;
      font-size: 4.2667vw;
      font-weight: 600;
      font-variation-settings: 'opsz' auto;
      color: #000000;
      text-shadow: none;
      overflow: hidden;
      &[back] {
        display: none;
      }
      &[success] {
        display: grid;
        place-content: center;
      }
    }

    .back {
      margin-top: 6.9333vw;
      font-size: 3.7333vw;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.7);
      text-shadow: 0px 4px 10px rgba(190, 190, 190, 0.302);
    }
  }
}
</style>
