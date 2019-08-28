import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/registered',
      component: () => import('./views/Registered.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue'),
      children: [
        {
          path: '/admin/articleList',
          name: 'articleList',
          component: () => import('./componnets/articleList.vue'),
        },
        {
          path: '/admin/editArticle',
          name: 'editArticle',
          component: () => import('./componnets/editArticle.vue'),
        }
      ]
    },
    {
      path: '/add',
      component: () => import('./views/testAdd.vue')
    },
  ]
})
