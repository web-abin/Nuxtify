<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'

definePageMeta({
    title: '服务端请求数据',
    sort: 2
})

const state = reactive({
    page: 1,
    pageSize: 8,
    finished: false
})
const { page, pageSize, finished } = toRefs(state)

interface ListItem {
    id: string
    title: string
    body: string
}
const list: Ref<ListItem[]> = ref([])
// immediate 进入页面请求接口,使用execute手动请求,顶层请求使用useAsyncData
const { pending, data, execute } = await useAsyncData(
    () =>
        $fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            params: {
                _start: page.value,
                _limit: pageSize.value
            }
        }),
    {
        // 服务端请求
        server: true,
        // 监听反应源
        watch: [page],
        // handler在解析后更改函数结果
        transform: (data: any) => {
            list.value = [...list.value, ...data]
            if (list.value.length > 30) finished.value = true
            return Array.from(list.value)
        }
    }
)

onMounted(() => {
    window.addEventListener('scroll', function (event: Event) {
        var scrollBottom = window.innerHeight + window.scrollY
        var documentHeight = document.body.scrollHeight

        if (scrollBottom >= documentHeight - 2) {
            if (!pending.value && !state.finished) {
                state.page++
            }
        }
    })
})
</script>

<template>
    <div class="page">
        <div class="list">
            <a v-for="item in data" :key="item.id" class="item" :href="`/detail/${item.id}`">
                <p class="title">{{ item.title }}</p>
                <p class="desc">{{ item.body }}</p>
            </a>
        </div>
        <div class="w-full flex justify-center">
            <a-spin v-show="pending" :size="32" class="mt-[12px]" />
            <p v-show="finished" class="mt-[12px]">-.-</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.page {
    height: fit-content;
    .list {
        .item {
            width: 100%;
            min-height: 1rem;
            padding: 0.12rem 0;
            border-bottom: 1px solid #e4e6eb80;
            cursor: pointer;
            .title {
                @include textOverflow;
                font-size: 0.16rem;
                font-weight: bold;
                line-height: 0.24rem;
                color: #252933;
            }
            .desc {
                @include ellipsis(2);
                font-size: 0.13rem;
                font-weight: 400;
                color: #8a919f;
                line-height: 0.22rem;
            }
        }
    }
}
</style>
