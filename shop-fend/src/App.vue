<template>
  <div id="app">
    <yd-layout>

        <menus :headerTitle="navbarTitle"></menus>
        <div class="content">
           <router-view/>
        </div>

        <footers @change="ChangeHeader"></footers>

    </yd-layout>
   
  </div>
</template>

<script>
import NavBarComponent from "./components/public/navbar";
import TabBarComponent from "./components/public/tabbar";


export default {
  name: 'App',
  data(){
    return {
      navbarTitle: "我的"
    }
  },
  methods: {
    ChangeHeader(title) {
     this.navbarTitle = title
    }
  },
  components: {
    "menus":NavBarComponent,
    "footers": TabBarComponent
  }
}
</script>

<style>
.content {
  padding: 1rem 0 .2rem 0;
}
</style>
