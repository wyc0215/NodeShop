import Vue from 'vue'
import Router from 'vue-router'
import IndexComponents from '@/components/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexComponents
    }
  ]
})
