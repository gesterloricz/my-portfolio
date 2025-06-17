import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../views/Hero.vue'
import Contact from '../views/Contacts.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'

const routes = [
  { path: '/', name: 'Home', component: Hero },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/projects', name: 'Projects', component: Projects },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
