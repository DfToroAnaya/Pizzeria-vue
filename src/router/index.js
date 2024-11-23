import { createRouter, createWebHashHistory } from 'vue-router'

import EditarClient from '../components/Client/EditarClient.vue';
import NewClient from '../components/Client/NewClient.vue';
import HomeView from '../views/HomeView.vue';
import Clients from '../views/Clients';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/edit-client/:id',
    name: 'EditarClient',
    component: EditarClient,
    props: true
  },
  {
    path: '/new-client',
    name: 'NewClient',
    component: NewClient
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

