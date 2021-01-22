import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      name: 'Layout',
      component: ()=> import('@/components/Layout')
  }, {
    path: '/login',
    name: 'Login',
    component: ()=> import('@/views/login')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
    if (to.path !== '/login' && !window.sessionStorage.getItem('token')) next('/login') 
    if (to.path === '/login' && !!window.sessionStorage.getItem('token')) next('/') 
    next()
})

export default router
