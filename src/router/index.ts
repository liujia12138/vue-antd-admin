import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: ()=> import('../views/layout/index.vue'),
    children:[
      {
        path: 'table/normal',
        name: 'NormalTable',
        component: ()=> import('../views/table/normal.vue'),
      }
    ]
  },{
    path: '*',
    name: 'NotFound',
    component: ()=>import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
