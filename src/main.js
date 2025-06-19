import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Biography from './views/Biography.vue'
import Works from './views/Works.vue'
import Contact from './views/Contact.vue'
import './style.css'

const routes = [
  { path: '/', component: Home },
  { path: '/biografia', component: Biography },
  { path: '/trabalhos', component: Works },
  { path: '/contato', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app') 