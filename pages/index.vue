<script lang="ts" setup>
import { setInterval } from '#imports'
import { Message } from '@arco-design/web-vue'
import { transform } from 'lodash'

import { getIndexList, testapi } from '~/apis/home'
import { useUserStore } from '~/stores/user.store'
import { isMobile } from '~/utils/common'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
definePageMeta({
  title: '首页'
})

const {
  public: { apiBase, env }
} = useRuntimeConfig()

const state = reactive({
  page: 1,
  pageSize: 12,
  loading: false,
  finish: false,
  audioUrl: ''
})
const { page, loading, finish, audioUrl } = toRefs(state)

const list = ref<any>([])
const { data, pending, error, refresh } = await useAsyncData(
  'aiList',
  () =>
    getIndexList({
      page: state.page,
      pageSize: state.pageSize
    }),
  {
    // 服务端请求
    server: true,
    // 监听反应源
    watch: [page],
    // handler在解析后更改函数结果
    transform: (data: any) => {
      list.value = [...list.value, ...data]
      loading.value = false
      return Array.from(list.value)
    }
  }
)

watch(
  () => state.page,
  () => {
    state.loading = true
  },
  {
    immediate: false
  }
)

const getList = async () => {
  state.loading = true
  const params = {
    page: state.page,
    pageSize: state.pageSize
  }

  getIndexList(params)
    .then((response: any) => {
      if (response.code !== 200)
        return Message.error(response.msg || '请求异常')
      if (response.data.length < 1) {
        state.finish = true
        state.loading = false
      } else {
        list.value = [
          ...list.value,
          ...response.data.map((item: any) => {
            return {
              ...item,
              tags: item.tags.splice(0, 3)
            }
          })
        ]
      }
    })
    .finally(() => {
      state.loading = false
    })
}
// getList()

const audio = ref<any>(null)
const onMouseEnter = (card: any) => {
  state.audioUrl = card.voice_introduct
  if (audio.value) {
    audio.value.play && audio.value.pause()
    audio.value.load()
    audio.value.play()
  }
}

const onMouseLeave = (card: any) => {
  audio.value.play && audio.value.pause()
  state.audioUrl = ''
}

// 上拉加载
const onScroll = (event: any) => {
  const scrollHeight = event.target.scrollHeight
  const scrollTop = event.target.scrollTop
  const clientHeight = event.target.clientHeight
  if (scrollTop + clientHeight >= scrollHeight - 40) {
    if (!state.loading && !state.finish) {
      state.page++
      // getList()
    }
  }
}

const goDetail = (card: any) => {
  router.push({
    path: isMobile() ? '/detail' : '/chat',
    params: {
      id: card.id
    }
  })
}
const goChat = (card: any) => {
  router.push({
    path: '/chat',
    params: {
      id: card.id
    }
  })
}
</script>

<template>
  <div class="page" @scroll="onScroll">
    <audio control ref="audio" loop :autoplay="false">
      <source :src="audioUrl" type="audio/mpeg" />
    </audio>
    <img src="~/assets/images/a2.webp" class="banner" alt="渲染banner图" />

    <div class="warpper">
      <div
        class="card"
        v-for="card in data"
        :key="card.id"
        @click="goDetail(card)"
        @mouseenter="onMouseEnter(card)"
        @mouseleave="onMouseLeave(card)"
      >
        <img :src="card.introduce_image" alt="AI角色封面" class="card-bg" />

        <p class="hot">
          <img src="~/assets/images/a17.webp" alt="热度" /><span
            >{{ card.heat }}K</span
          >
        </p>

        <button class="btn-chat" @click.stop="goChat(card)">
          Chat<img src="~/assets/images/a6.webp" alt="" />
        </button>

        <div class="card-footer">
          <img
            src="~/assets/images/a7.webp"
            alt="音波图形"
            class="icon-audio"
          />
          <div class="card-title">{{ card.name }}</div>
          <p class="card-introduce">
            {{ card.moment ? card.moment : card.introduce }}
          </p>
          <div class="card-tags">
            <div class="tag" v-for="tag in card.tags" :key="tag">{{ tag }}</div>
          </div>
        </div>
      </div>

      <div class="flex-center loading-list" v-show="loading || finish">
        <a-spin :size="32" v-if="!finish" />
        <p v-else>-.-</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  padding: 0.225rem;
  .banner {
    width: 100%;
    height: 2.55rem;
  }
  .warpper {
    margin-top: 0.18rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0.15rem;
    row-gap: 0.225rem;
    .loading-list {
      grid-column-start: 1;
      grid-column-end: 5;
    }
    .card {
      --show-chat: 0;
      position: relative;
      width: 100%;
      aspect-ratio: 262.5 / 420;
      border-radius: 0.18rem;
      border: 2px solid rgba(255, 255, 255, 0.3);
      cursor: pointer;
      transition: transform 0.2s ease-out;
      overflow: hidden;
      &:hover {
        --show-chat: 1;
        transform: scale(1.06857);
        border: 2px solid #ffa13a;
      }
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        width: 100%;
        height: 47.32%;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.7) 78%
        );
      }
      .card-bg {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .hot {
        display: none;
      }
      .btn-chat {
        opacity: var(--show-chat);
        will-change: opacity;
        transition: opacity 0.2s ease;
        position: absolute;
        top: 4%;
        right: 6%;
        width: 0.765rem;
        height: 0.33rem;
        border-radius: 16.5px;
        background: #ffa13a;
        backdrop-filter: blur(7.075rem);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.135rem;
        font-weight: 600;
        line-height: 1;
        font-variation-settings: 'opsz' auto;
        color: #000000;
        img {
          width: 0.117rem;
          height: 0.12rem;
          margin-left: 0.0243rem;
        }
      }

      .card-footer {
        position: absolute;
        left: 0;
        z-index: 2;
        bottom: 0.192rem;
        width: 100%;
        padding: 0 0.15rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        .icon-audio {
          width: 0.561rem;
          height: 0.1443rem;
          opacity: var(--show-chat);
          will-change: opacity;
          transition: opacity 0.2s ease;
        }
        .card-title {
          margin-top: 0.05rem;
          font-size: 22.44px;
          font-weight: 600;
          line-height: 29.65px;
          letter-spacing: 0px;
          color: #ffffff;
          text-shadow: 0px 2.4px 16.03px rgba(0, 0, 0, 0.4);
          @include textOverflow();
        }
        .card-introduce {
          margin-top: 0.1282rem;
          font-size: 0.1202rem;
          font-weight: 500;
          line-height: 0.1763rem;
          color: rgba(255, 255, 255, 0.9);
          @include ellipsis(3);
        }
        .card-tags {
          margin-top: 0.1129rem;
          height: 0.2rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          column-gap: 0.08rem;
          overflow: hidden;
          .tag {
            width: fit-content;
            height: 0.2rem;
            border-radius: 0.16rem;
            padding: 0 0.08rem;
            background: #000000;
            white-space: nowrap;
            display: grid;
            place-content: center;
            font-size: 0.1rem;
            font-weight: 500;
            line-height: 1;
            font-variation-settings: 'opsz' auto;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }
  }
}

@import './index.mobile.scss';
</style>
