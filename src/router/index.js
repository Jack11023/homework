import Vue from 'vue'
import Router from 'vue-router'
import desktop from '../components/desktop.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
     component: desktop
    }
  ]
})
