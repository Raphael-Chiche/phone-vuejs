import { createRouter, createWebHistory } from 'vue-router'
import JournalView from '../views/JournalView.vue'
import ContactView from '../views/ContactView.vue'
import ClavierView from '../views/ClavierView.vue'
import FormsView from '../views/FormsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: JournalView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/clavier',
      name: 'clavier',
      component: ClavierView
    },
    {
      path: '/forms',
      name: 'forms',
      component: FormsView  
    }
  ]
})

export default router
