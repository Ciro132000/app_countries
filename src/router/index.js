import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/dashboard/Dashboard.vue'
import Home from '../views/home/home.vue'
import View1 from '../views/view1/view1.vue'
import View2 from '../views/view2/view2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    redirect:'/home',
    component: Dashboard,
    children:[
      {
        path: '/home',
        component: Home,
        name: 'home'
      },
      { 
        path: '/view-1',
        component: View1,
        name: 'View1'
      },
      { 
        path: 'view-2',
        component: View2 ,
        name: 'View2'
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
