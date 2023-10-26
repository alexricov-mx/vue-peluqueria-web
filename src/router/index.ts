import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BorellView from '../views/BorellView.vue'
import TranaView from '../views/TranaView.vue'
import ViewerView from '../views/ViewerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/borell',
      name: 'borell',
      component: BorellView
    },
    {
      path: '/trana',
      name: 'trana',
      component: TranaView
    },
    {
      path: '/viewer/:nombre/:url',
      name: 'viewer',
      component: ViewerView,
      props:{
        nombre: String,
        url: String
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  console.log("beforeEach en router/index.ts")
});

export default router
