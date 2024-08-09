import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import App from './App.vue'
import { Icon } from '@iconify/vue';

import TheHome from './components/pages/TheHome.vue'
import BaseTitle from './components/sections/BaseTitle.vue';

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/kezdolap', component: TheHome },
        { path: '/etlap', component: TheHome },
        { path: '/itallap', component: TheHome },
        { path: '/:notFound(.*)', redirect: '/kezdolap'}
    ]
})

app.use(router)

app.component('Icon', Icon)
app.component('BaseTitle', BaseTitle)

app.mount('#app')
