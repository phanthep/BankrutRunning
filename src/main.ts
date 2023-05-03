import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';

import Home from './pages/home.vue'
import Register from './pages/register/index.vue'
import RegisterDetail from './pages/register/registerDetail.vue'
import About from './pages/about.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.min.css'


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home, name: 'home' },
      { path: '/register', component: Register, name: 'register' },
      { path: '/about', component: About, name: 'about' }
    ]
})

const vuetify = createVuetify({
    components,
    directives,
})
  const pinia = createPinia()
createApp(App).use(vuetify).use(router).use(pinia).use(VueSweetalert2).mount('#app');