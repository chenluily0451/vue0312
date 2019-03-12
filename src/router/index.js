/**
 * Created by chenlu on 2019/3/12.
 */

import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '../pages/welcome.vue';
import Welcome1 from '../pages/welcome1.vue';

Vue.use(Router)
const routes =  [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/hi',
        name: 'Welcome1',
        component: Welcome1
    },
    {
        path: '*',
        redirect:'/'
    }
];

const router = new Router({
    routes
});

export default router;