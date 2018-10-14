<template>
    <div class="tabbar">
        <yd-tabbar slot="tabbar" fixed>
            <yd-tabbar-item title="首页" link="#" active @click.native="changeTitle('首页')">
                <yd-icon name="home" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车" link="#" @click.native="changeTitle('购物车')">
                <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="分类" link="#" @click.native="changeTitle('分类')">
                <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="我的" link="#" @click.native="changeTitle('我的')">
                <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
        </yd-tabbar>
    </div>
</template>


<script>
export default {
    methods: {
        changeTitle(ti) {
            this.$emit("change",ti)
            //console.log(this.$root.$children[0].$data.navbarTitle =ti)
        }
    },
}
</script>

<style scoped>

</style>
