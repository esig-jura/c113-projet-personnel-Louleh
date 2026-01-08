export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Welcome.vue'),
        meta: {
            title: 'Accueil',
        },
    },
    {
        path: '/membership',
        name: 'About',
        component: () => import('@/views/Membership.vue'),
        meta: {
            title: 'Devenir membre',
        },
    },
    {
        path: '/membership',
        name: 'membership',
        component: () => import('@/views/Membership.vue'),
        meta: {
            title: 'Devenir membre',
        },
    },
    {
        path: '/events',
        name: 'events',
        component: () => import('@/views/Events.vue'),
        meta: {
            title: 'Événements',
        },
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: {
            title: 'À propos',
        },
    }
]