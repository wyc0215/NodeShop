<template>
  <div class="index">
    <swiper :imglist="swiperList"></swiper>
    <yd-grids-group :rows="3" >
        <yd-grids-item v-for="n in classList" :key="n">
          <img slot="icon" :src="n.logo">
          <span slot="text">{{n.title}}</span>
        </yd-grids-item>
    </yd-grids-group>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import SwiperComponent from "../public/swiper";
export default {

  created () {
    
    let name = {
      id: 1
    }
  
    this.$http.get({
      url: '/shop/info',
      token: this.$utils.encrypt(name)
    }, res => {
      console.log(res.data)
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperList: [
        {
          id: "1",
          href: "http://www.ydcss.com",
          url:"https://s2.mogucdn.com/mlcdn/c45406/181012_5ki4i77khc5g84ka1aha179621e69_750x300.jpg"
        },
         {
          id: "2",
          href: "http://www.ydcss.com",
          url:"https://s11.mogucdn.com/mlcdn/c45406/181012_7k62lb55gaad3e92la0clj3a4h9ib_750x300.jpg"
        },
         {
          id: "3",
          href: "http://www.ydcss.com",
          url:"https://s18.mogucdn.com/mlcdn/c45406/181012_444e4a96gja1jfgbdga48e03allke_750x300.jpg"
        }
      ],
      classList: [
        {
          id: 1,
          title: "小米",
          logo: "https://s01.mifile.cn/i/logo.png"
        },
        {
          id: 2,
          title: "华为",
          logo: "https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/17f2dd9756d9d333bee8e60ce8c03e4c_222_222.jpg"
        },
        {
          id: 3,
          title: "三星"
        },
        {
          id: 4,
          title: "苹果"
        },
        {
          id: 5,
          title: "魅族"
        },
        {
          id: 6,
          title: "联想"
        }
      ]
    }
  },
  components: {
    "swiper": SwiperComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
