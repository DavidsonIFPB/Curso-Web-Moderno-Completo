import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import adminPages from '../components/admin/adminPages'

Vue.use(VueRouter)

const routes = [{
    name:'home',
    path: '/',
    component: Home,
},{
    name:'adminPages',
    path: '/admin',
    component: adminPages
}]

export default new VueRouter({
    mode:'history',
    routes
})