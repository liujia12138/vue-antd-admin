import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import menu from '@/utils/menu'

Vue.use(VueRouter)

// 动态路由
const addMenuRoutes = (menuList: [] = [], basePath: String = '') => {
  let routes= menuList.map((menu) => {
    const path = menu.path
    if (menu.children) {
      return addMenuRoutes(menu.children, path)
    }
    return {
      path: basePath + path,
      name: menu.name,
      meta: menu.meta,
      component: () => import(`../views${basePath + path}`)
    }
  })
  return routes.flat()
} 


const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    redirect: {
      path: '/form/base'
    },
    component: () => import('../views/layout/index.vue'),
    children: addMenuRoutes(menu)
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next)=>{
  console.log(to,"to")
  next()
})
export default router
