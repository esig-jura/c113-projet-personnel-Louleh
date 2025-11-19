import { createRouter, createWebHashHistory } from 'vue-router'

import Welcome from '@/views/welcome.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Welcome,
        },
        {
            path: '/membership',
            name: 'membership',
            component: () => import("@/views/Membership.vue"),
        },
        {
            path: '/events',
            name: 'events',
            component: () => import("@/views/Events.vue"),
        }
    ],
})

export default router