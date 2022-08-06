import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/letters',
    name: 'letters.index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "letters-index" */ '../views/letters/ListView.vue'),
  },
  {
    path: '/letters/:letter',
    name: 'letters.show',
    component: () => import(/* webpackChunkName: "letters-show" */ '../views/letters/ShowView.vue'),
    props: route => ({ letter: route.params.letter }),
  },
  {
    path: '/letters/:letter/exercise',
    name: 'letters.exercise',
    component: () => import(/* webpackChunkName: "letters-show" */ '../views/letters/ExerciseView.vue'),
    props: route => ({ letter: route.params.letter }),
  },
  {
    path: '/children',
    name: 'children',
    component: () => import(/* webpackChunkName: "children" */ '../views/children/ListView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  store.dispatch('showSpinner').then(() => {
    next()
  })
})

router.afterEach((to) => {
  if (!to.matched[0].components.default.created) {
    store.dispatch('hideSpinner')
  }
})

export default router
