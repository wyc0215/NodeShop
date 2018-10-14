<template>
    <div class="swiper">
        <yd-slider autoplay="3000">
            <yd-slider-item v-for="(item,index) in imglist" :key="index">
                <a :href="item.href">
                    <img :src="item.url">
                </a>
            </yd-slider-item>
        </yd-slider>
    </div>
</template>

<script>
    export default {
        props: ["imglist"]
    }
</script>

<style scoped>

</style>