import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home/index.vue';
import Login from '../pages/login/login.vue';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: Home
        },
    ]
})

export default router