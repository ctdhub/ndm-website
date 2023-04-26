import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const About = () => import('./components/views/About.vue')
const Beliefs = () => import('./components/views/Beliefs.vue')
const Directions = () => import('./components/views/Directions.vue') 
const Events = () => import('./components/views/Events.vue')
const Framework = () => import('./components/views/Framework.vue') 
const Giving = () => import('./components/views/Giving.vue') 
const Home = () => import('./components/views/Home.vue') 
const Info = () => import('./components/views/Info.vue')
const Leadership = () => import('./components/views/Leadership.vue') 
const Livestream = () => import('./components/views/Livestream.vue') 
const Visitors = () => import('./components/views/Visitors.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/beliefs', component: Beliefs },
  { path: '/directions', component: Directions },
  { path: '/events', component: Events },
  { path: '/framework', component: Framework },
  { path: '/giving', component: Giving },
  { path: '/info', component: Info },
  { path: '/leadership', component: Leadership },
  { path: '/livestream', component: Livestream },
  { path: '/visitors', component: Visitors },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      document.getElementById('app').scrollTop = 0;
    },
  })

const app = createApp(App)

app.use(router)
app.mount('#app')