import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const About = () => import('./components/views/About.vue')
const Beliefs = () => import('./components/views/Beliefs.vue')
const Directions = () => import('./components/views/Directions.vue') 
const Giving = () => import('./components/views/Giving.vue') 
const Home = () => import('./components/views/Home.vue') 
const Leadership = () => import('./components/views/Leadership.vue') 
const Livestream = () => import('./components/views/Livestream.vue') 
const Visitors = () => import('./components/views/Visitors.vue')

const routes = [
  { path: '/', redirect: to => 'home' },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/beliefs', component: Beliefs },
  { path: '/directions', component: Directions },
  { path: '/giving', component: Giving },
  { path: '/leadership', component: Leadership },
  { path: '/livestream', component: Livestream },
  { path: '/visitors', component: Visitors },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

const app = createApp(App)

app.use(router)
app.mount('#app')