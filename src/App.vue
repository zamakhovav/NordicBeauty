<template>
    <div class="super_container">
        <TopHeader></TopHeader>
        <router-view/>
    </div>
</template>

<script>
    import TopHeader from "./components/header/TopHeader";

    export default {
        name: 'super_container',
        components: {
            TopHeader
        }
    }
</script>

<style lang="scss">
    @import "./scss/main";
</style>
