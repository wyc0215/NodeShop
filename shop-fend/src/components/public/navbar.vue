<template>
    <div class="v-navbar">
        <yd-navbar slot="navbar" :title="headerTitle" fixed>
            <router-link to="#" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
        </yd-navbar>
    </div>
</template>


<script>
export default {
    props: ["headerTitle"]
}
</script>

<style scoped>

</style>
