<!-- ai回复消息气泡 -->
<template>
  <div class="container">
    <img
      src="https://img2.baidu.com/it/u=1877544649,393339224&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"
      alt="AI角色头像"
      class="avatar"
    />

    <!-- 文本消息 -->
    <div v-if="type !== 'img'" class="text-bubble">
      <!-- pc端音频图案 -->
      <img src="~/assets/images/a15.webp" alt="音频" class="audio pc" />
      <!-- 移动端音频图案 -->
      <div class="audio mobile">
        <span>5"</span>
        <img src="~/assets/images/a15-2.webp" alt="音频" />
      </div>
      <span>{{ content }}</span>
    </div>

    <!-- 图片消息 -->
    <div class="img-bubble" v-else>
      <div class="mask" @click.stop="chargeStore.showCharge = true">
        <div class="price">
          <img src="~/assets/images/a9.webp" alt="金币图标" />
          <span>10</span>
        </div>
        <div class="level">
          <!-- <div v-for="(img, index) in 4" :key="index">
          <img src="~/assets/images/a13.webp" alt="等级" v-if="index < 3" />
          <img src="~/assets/images/a14.webp" alt="等级" v-else />
        </div> -->
          <img src="~/assets/images/a13.webp" alt="等级" />
          <img src="~/assets/images/a13.webp" alt="等级" />
          <img src="~/assets/images/a13.webp" alt="等级" />
          <img src="~/assets/images/a13.webp" alt="等级" />
        </div>
        <div class="tip">Tap to see<br />what's inside</div>
      </div>
      <img :src="content" alt="图片消息" class="img-content" />
    </div>

    <!-- pc 端 -->
    <div class="eval-area" pc>
      <img src="~/assets/images/a11.webp" alt="赞" />
      <img src="~/assets/images/a12.webp" alt="踩" />
    </div>
    <!-- 移动端评价区 -->
    <div class="eval-area" mobile>
      <img src="~/assets/images/a12-2.webp" alt="踩" />
      <img src="~/assets/images/a11-2.webp" alt="赞" />
    </div>
  </div>
</template>

<script setup>
import { useChargeStore } from '~/stores/charge.store'

const chargeStore = useChargeStore()

const props = defineProps({
  // 消息类型  text audio  img
  type: {
    type: String,
    default: 'text'
  },
  content: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: fit-content;
  display: flex;

  .avatar {
    display: none;
  }

  .text-bubble {
    width: fit-content;
    max-width: 70%;
    height: fit-content;
    min-height: 0.4425rem;
    padding: 0.12rem;
    background: #9b715d;
    border-radius: 0.18rem;
    overflow: hidden;
    .audio {
      display: inline-block;
      width: 0.2147rem;
      min-width: 0.2147rem;
      height: 0.2147rem;
      margin-right: 0.0704rem;
      &.mobile {
        display: none;
      }
    }
    span {
      font-size: 0.15rem;
      font-weight: 400;
      line-height: 0.195rem;
      color: #ffffff;
    }
  }

  .img-bubble {
    position: relative;
    width: fit-content;
    max-width: 50%;
    height: fit-content;
    border-radius: 0.12rem;
    overflow: hidden;
    user-select: none;
    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(153, 113, 71, 0.2);
      backdrop-filter: blur(20.25px);
      cursor: pointer;
      .price {
        position: absolute;
        top: 0.0425rem;
        left: 0.04rem;
        width: fit-content;
        height: 0.24rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        padding: 0 0.04rem;
        background: #000000;
        img {
          width: 0.2rem;
          height: 0.2rem;
        }
        span {
          font-family: Poppins;
          font-size: 0.14rem;
          font-weight: 600;
          line-height: 1;
          color: #ffffff;
        }
      }
      .level {
        position: absolute;
        right: 0;
        top: 0;
        width: fit-content;
        height: 0.2475rem;
        padding: 0 0.0675rem;
        display: flex;
        align-items: center;
        border-radius: 0 0 0 0.123rem;
        background: rgba(255, 255, 255, 0.15);
        div,
        img {
          width: 0.1575rem;
          height: 0.1575rem;
        }
      }
      .tip {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        font-size: 15.75px;
        font-weight: normal;
        line-height: normal;
        text-align: center;
        letter-spacing: 0em;
        color: #ffffff;
        text-shadow: 0px 4.5px 11.25px rgba(0, 0, 0, 0.302);
      }
    }

    .img-content {
      width: auto;
      min-width: 1.4rem;
      max-width: 100%;
      height: auto;
      min-height: 1rem;
      max-height: 2.31rem;
      object-fit: cover;
      pointer-events: none;
    }
  }

  .eval-area {
    align-self: flex-end;
    margin-left: 0.07rem;
    display: flex;
    align-items: center;
    img {
      width: 0.2325rem;
      height: 0.2325rem;
      margin-right: 0.0975rem;
    }
    &[mobile] {
      display: none;
    }
  }
}

@media screen and (max-width: 480px) {
  .container {
    width: 100%;
    height: fit-content;
    display: flex;

    .avatar {
      display: block;
      width: 8.5333vw;
      height: 8.5333vw;
      border-radius: 50%;
      margin-right: 3.2vw;
    }

    .text-bubble {
      width: fit-content;
      max-width: 70%;
      height: fit-content;
      min-height: 11.7333vw;
      padding: 3.2vw 4.2667vw;
      background: #9b715d;
      border-radius: 5.3333vw 5.3333vw 5.3333vw 1.0667vw;
      overflow: hidden;
      .audio {
        display: inline-block;
        width: 0.2147rem;
        min-width: 0.2147rem;
        height: 0.2147rem;
        margin-right: 0.0704rem;
        &.pc {
          display: none;
        }
        &.mobile {
          width: 100%;
          margin-bottom: 1.0667vw;
          display: flex;
          align-items: center;
          span {
            font-size: 3.7333vw;
            font-weight: 400;
            line-height: 5.3333vw;
            color: #ffffff;
          }
          img {
            width: 5.3333vw;
            height: 5.3333vw;
            margin-left: 1.6vw;
          }
        }
      }
      span {
        font-size: 3.7333vw;
        font-weight: 400;
        line-height: 5.3333vw;
        color: #ffffff;
      }
    }

    .img-bubble {
      position: relative;
      width: fit-content;
      max-width: 50%;
      height: fit-content;
      border-radius: 1.0667vw 2.6667vw 2.6667vw 2.6667vw;
      overflow: hidden;
      user-select: none;
      .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(153, 113, 71, 0.2);
        backdrop-filter: blur(20.25px);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .price {
          position: relative;
          top: unset;
          left: unset;
          width: fit-content;
          height: 5.8667vw;
          border-radius: 4.2667vw;
          display: flex;
          align-items: center;
          padding: 0 1.6vw 0 1.0667vw;
          background: rgba(255, 255, 255, 0.4);
          transform: rotateY(180deg);
          img {
            width: 4.2667vw;
            height: 4.2667vw;
            margin-right: 0.2667vw;
          }
          span {
            font-family: PingFang SC;
            font-size: 3.7333vw;
            font-weight: 600;
            line-height: 1;
            color: #ffffff;
            transform: rotateY(180deg);
          }
        }
        .level {
          display: none;
        }
        .tip {
          position: relative;
          left: unset;
          top: unset;
          width: 100%;
          transform: unset;
          margin-top: 1.6vw;
          font-size: 3.7333vw;
          font-weight: 400;
          color: #ffffff;
          text-shadow: 0px 4.5px 11.25px rgba(0, 0, 0, 0.302);
        }
      }

      .img-content {
        width: auto;
        min-width: 1.4rem;
        max-width: 100%;
        height: auto;
        min-height: 1rem;
        max-height: 2.31rem;
        object-fit: cover;
        pointer-events: none;
      }
    }

    .eval-area {
      align-self: flex-end;
      margin-left: 0;
      display: flex;
      align-items: center;
      img {
        width: 5.3333vw;
        height: 5.3333vw;
        margin-right: 1.6vw;
      }
      &[pc] {
        display: none;
      }
      &[mobile] {
        display: flex;
      }
    }
  }
}
</style>
