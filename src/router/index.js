import Vue from 'vue'
import VueRouter from 'vue-router'
import myHome from '../views/myHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  
  {
    path: '/home',
    component: myHome
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/myAbout.vue')
  },
  {
    path: '/competition',
    name: 'competition',
    component: () => import(/* webpackChunkName: "competition" */ '../views/myCompetition.vue')
  },
  {
    path: '/finished',
    name: 'finished',
    component: () => import(/* webpackChunkName: "finished" */ '../views/myFinished.vue')
  },
  {
    path: '/opinion',
    name: 'opinion',
    component: () => import(/* webpackChunkName: "opinion" */ '../views/myOpinion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
