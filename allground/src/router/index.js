import Vue from 'vue'
import VueRouter from 'vue-router'
import bus from '../utils/bus'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    beforeEnter: (to,from,next) => {
      bus.$emit('start:loading');
      setTimeout( ()=>{next()},0 );
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    beforeEnter: (to,from,next) => {
      bus.$emit('start:loading');
      setTimeout( ()=>{next()},0 );
    },
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/Service.vue'),
    beforeEnter: (to,from,next) => {
      bus.$emit('start:loading');
      setTimeout( ()=>{next()},0 );
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    beforeEnter: (to,from,next) => {
      bus.$emit('start:loading');
      setTimeout( ()=>{next()},0 );
    },
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue'),
    beforeEnter: (to,from,next) => {
      bus.$emit('start:loading');
      setTimeout( ()=>{next()},0 );
    },
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import('../views/Apply.vue'),
    beforeEnter: (to,from,next) => {
      bus.$emit('start:loading');
      setTimeout( ()=>{next()},0 );
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: (to,from,next) => {
      bus.$emit('start:loading');
      setTimeout( ()=>{next()},0 );
    },
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
