<template>
  <a-modal
    v-model:visible="chargeStore.showCharge"
    :hide-title="true"
    modalClass="charge-modal"
  >
    <div class="block" @click.stop>
      <p class="title">XCoin</p>
      <div class="coin">
        <img src="~/assets/images/a9.webp" alt="金币图标" />
        <span>86.72</span>
      </div>

      <loading-page v-if="!chargeStore.priceList.length" />
      <div class="charge-list" v-else>
        <div
          class="charge-item"
          v-for="(pay, index) in chargeStore.priceList"
          :key="index"
          :class="{
            'charge-item_active': chargeStore.payCoin.coins === pay.coins
          }"
          @click="onSelectPirce(pay)"
        >
          <div class="row1">
            <img src="~/assets/images/a9.webp" alt="金币图标" />
            <span>{{ pay.coins }}</span>
          </div>
          <p class="row2">${{ pay.usd_price }}</p>
        </div>
      </div>

      <img
        src="~/assets/images/d1.webp"
        alt="支付按钮"
        class="btn-pay"
        @click="handlePaypal"
      />

      <p class="protocol">
        By continuing you accept our ML Coin recharge Terms
      </p>
    </div>
  </a-modal>
</template>

<script setup>
import { Message } from '@arco-design/web-vue'
import { useChargeStore } from '~/stores/charge.store.ts'

const chargeStore = useChargeStore()

// 显示登录弹窗
const showModal = ref(false)
defineExpose({
  showModal
})

watch(
  () => chargeStore.showCharge,
  (val) => {
    // 获取充值列表
    if (!val) return

    if (chargeStore.priceList.length) {
      chargeStore.payCoin = chargeStore.priceList[0]
    } else {
      chargeStore.getPriceList()
    }
  }
)

const onSelectPirce = (type) => {
  chargeStore.payCoin = type
}

const handlePaypal = async () => {
  const res = await chargeStore.handleCreateOrder({
    pay_platform: 'paypal', // 苹果内购, 目前只有一个, 后续会支持多平台
    currencyCode: 'USD', // 货币类型
    rawPrice: chargeStore.payCoin.coins, // 外币金额 单位分
    product_id: chargeStore.payCoin.product_id, // 金币
    is_web: true
  })
  if (res.code == 200 && res.data.approve_url != '') {
    showModal.value = false
    window.location.href = res.data.approve_url
  }
}
</script>

<style scoped lang="scss">
.block {
  width: 4.56rem;
  height: fit-content;
  padding: 0.26rem 0.58rem 0.1925rem 0.58rem;
  border-radius: 0.225rem;
  background: #000000;
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  .title {
    font-size: 0.21rem;
    font-weight: 600;
    line-height: 1.5;
    font-variation-settings: 'opsz' auto;
    color: #ffffff;
  }
  .coin {
    margin-top: 0.04rem;
    display: flex;
    align-items: center;
    img {
      width: 0.24rem;
      height: 0.24rem;
      margin-right: 0.03rem;
    }
    span {
      font-size: 0.2025rem;
      font-weight: 400;
      color: #ffffff;
    }
  }

  .charge-list {
    width: 100%;
    margin-top: 0.095rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 0.12rem;
    .charge-item {
      width: calc(50% - 0.1rem);
      height: 0.54rem;
      border-radius: 0.12rem;
      background: rgba(74, 81, 105, 0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .row1 {
        display: flex;
        align-items: center;
        img {
          width: 0.24rem;
          height: 0.24rem;
          margin-right: 0.035rem;
        }
        span {
          font-size: 0.195rem;
          font-weight: 600;
          line-height: 0.165rem;
          color: #ffffff;
        }
      }
      .row2 {
        margin-top: 0.035rem;
        font-size: 0.135rem;
        font-weight: 400;
        line-height: 0.1376rem;
        color: rgba(255, 255, 255, 0.5);
        text-shadow: 0px 1.72px 6.88px rgba(50, 131, 122, 0.1);
      }
    }
    .charge-item_active {
      border: 1.5px solid #ffa13a;
    }
  }
  .btn-pay {
    width: 2.3625rem;
    height: 0.315rem;
    margin-top: 0.1475rem;
  }
  .protocol {
    margin-top: 0.1075rem;
    font-size: 0.105rem;
    font-weight: 300;
    color: #9e9e9e;
    a {
      color: #ffa13a;
    }
  }
}

@media screen and (max-width: 480px) {
  .block {
    width: 93.6vw;
    height: fit-content;
    padding: 5.3333vw 4.8vw 5.6vw 4.8vw;
    border-radius: 5.3333vw;
    background: #000000;
    .title {
      font-size: 5.3333vw;
    }
    .coin {
      margin-top: 1.0667vw;
      img {
        width: 7.4667vw;
        height: 7.4667vw;
        margin-right: 1.0667vw;
      }
      span {
        font-size: 4.8vw;
        font-weight: 500;
        color: #ffffff;
      }
    }

    .charge-list {
      width: 100%;
      margin-top: 4.5333vw;
      row-gap: 1.6vw;
      .charge-item {
        width: calc(50% - 1.3333vw);
        height: 21.6vw;
        border-radius: 4.2667vw;
        background: rgba(255, 255, 255, 0.2);

        .row1 {
          img {
            width: 7.4667vw;
            height: 7.4667vw;
            margin-right: 0.8vw;
          }
          span {
            font-size: 6.9333vw;
            font-weight: 600;
            line-height: 5.8667vw;
            color: #ffffff;
          }
        }
        .row2 {
          margin-top: 0.035rem;
          font-size: 0.135rem;
          font-weight: 400;
          line-height: 0.1376rem;
          color: rgba(255, 255, 255, 0.5);
          text-shadow: 0px 1.72px 6.88px rgba(50, 131, 122, 0.1);
        }
      }
      .charge-item_active {
        border: 1.5px solid #ffa13a;
      }
    }
    .btn-pay {
      width: 2.3625rem;
      height: 0.315rem;
      margin-top: 0.1475rem;
    }
    .protocol {
      margin-top: 0.1075rem;
      font-size: 0.105rem;
      font-weight: 300;
      color: #9e9e9e;
      a {
        color: #ffa13a;
      }
    }
  }
}
</style>
