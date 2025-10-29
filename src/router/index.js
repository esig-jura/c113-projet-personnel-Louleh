import { createRouter, createWebHashHistory } from 'vue-router'

import Welcome from '@/views/welcome.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Welcome,
        }
    ],
})

export default router
