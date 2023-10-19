import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("../views/TutorialsList.vue")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("../views/Tutorial.vue")
    },
    {
      path: "/transferencia/:id",
      name: "tutorial-details",
      component: () => import("../views/Tutorial.vue")
    },
    {
      path: "/addTransferencia",
      name: "add",
      component: () => import("../views/AddTransferencia.vue")
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
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

export default router
