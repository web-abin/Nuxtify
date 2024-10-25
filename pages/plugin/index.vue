<script lang="ts" setup>
definePageMeta({
    title: '插件示例',
    sort: 6
})

type test = {
    $sensors: any
}
const { $sensors } = useNuxtApp()

console.log('%c页面setup', 'color:green')
onMounted(() => {
    console.log('%c页面挂载完成', 'color:green')
})
if (process.client) {
    $sensors.track('h5_LoginPlatformClick', {
        custom_attr: '上报数据'
    })
}
</script>

<template>
    <div class="page">
        <ContentDoc class="markdown" />
    </div>
</template>

<style scoped></style>
