<template>
    <aside>
        <nuxt-link to="/" class="menu" active-class="menu_active" exact> 首页 </nuxt-link>
        <nuxt-link v-for="(nav, index) in navList" :key="index" :to="nav.to" class="menu" active-class="menu_active" exact>
            {{ nav.name }}
        </nuxt-link>
    </aside>
</template>

<script lang="ts" setup>
const router = useRouter()
const navList = ref()
const routerList = router
    .getRoutes()
    .filter((item) => item.path !== '/' && item.meta.sort !== -1)
    .sort((a, b) => b.meta.sort - a.meta.sort)
    .map((item) => ({ to: item.path, name: item.meta.title ?? item.name }))
    .reverse()

navList.value = routerList
</script>

<style scoped lang="scss">
aside {
    width: var(--aside-width);
    min-width: var(--aside-width);
    height: 100%;
    max-height: 120vh;
    border-radius: 4px;
    padding: 0.08rem;
    background: var(--background-panel);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    .menu {
        width: 100%;
        height: 0.48rem;
        margin-bottom: 0.16rem;
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding-left: 0.2rem;
        border: 1.5px solid rgba(255, 255, 255, 0.1);
        font-size: 0.15rem;
        font-weight: 500;
        font-variation-settings: 'opsz' auto;
        cursor: pointer;
        img {
            width: 0.165rem;
            height: 0.165rem;
            margin-right: 0.09rem;
        }
        &_active {
            border: none;
            background: #eaf2ff;
            color: #1e80ff;
        }
    }
}
</style>
