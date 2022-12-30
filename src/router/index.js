import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/HomePage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: HomePage
    },
    // {
    //     path: '/poost/:id',
    //     component: back
    // }
]

const router = new VueRouter({
    routes
})

export default router