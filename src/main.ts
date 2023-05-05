import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';

import Home from './pages/home.vue'
import Register from './pages/register/index.vue'
import RegisterForm from './pages/register/registerForm.vue'
import RaceType from './pages/register/raceType.vue'
import SelectShirt from './pages/register/selectShirt.vue'
import Payment from './pages/register/payment.vue'
import Verification from './pages/register/verification.vue'
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
      { path: '/register/registerForm', component: RegisterForm, name: 'registerForm' },
      { path: '/register/raceType', component: RaceType, name: 'raceType' },
      { path: '/register/selectShirt', component: SelectShirt, name: 'selectShirt'},
      { path: '/register/payment', component: Payment, name: 'payment'},
      { path: '/register/verification', component: Verification, name: 'verification'},
      { path: '/about', component: About, name: 'about' }
    ]
})

const vuetify = createVuetify({
    components,
    directives,
})
  const pinia = createPinia()
createApp(App).use(vuetify).use(router).use(pinia).use(VueSweetalert2).mount('#app');