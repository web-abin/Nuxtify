<script lang="ts" setup>
definePageMeta({
    middleware: 'auth',
    title: '中间件认证示例',
    sort: 5
})
</script>

<template>
    <div class="page">
        <ContentDoc class="markdown" />
    </div>
</template>

<style scoped>
.page {
    padding-bottom: 1rem;
}
</style>
