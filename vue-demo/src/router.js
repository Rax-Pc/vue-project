import Vue from 'vue';
import Router from 'vue-router';
import LoginIndex from './views/login/Index';
import Index from './views/index/Index';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/loginIndex'
        },
        {
            path: '/index',
            component: Index,
            meta: { title: '首页' },
            children:[
                {
                    path: '/index',
                    component: Index,
                    meta: { title: '首页' }
                }
            ]
        },
        {
            path: '/loginIndex',
            component: LoginIndex
        },
        {
            path: '*',
            component:()=>import('./views/404')
        }
    ]
})
