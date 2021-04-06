import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue')
  },
  {
    path: '/crear-autor',
    name: 'Crear-autor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Crear-autor.vue')
  }, 
  {
    path: '/crear-post',
    name: 'Crear-post',
    component: () => import(/* webpackChunkName: "about" */ '../views/Crear-post.vue')
  },
  {
    path: '/editar-post',
    name: 'Editar-post',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar-post.vue')
  },
  {
    path: '/eliminar-post',
    name: 'Eliminar-post',
    component: () => import(/* webpackChunkName: "about" */ '../views/Eliminar-post.vue')
  }  
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
