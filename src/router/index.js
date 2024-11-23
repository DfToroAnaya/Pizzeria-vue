import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

import Employees from '../views/Employees';
import NewEmployee from '../components/Employee/NewEmployee.vue'
import EditarEmployee from '../components/Employee/EditarEmployee.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },

  {
    path: '/editar-employee/:id',
    name: 'EditarEmployee',
    component: EditarEmployee
  },

  {
    path: '/add-employee/',
    name: 'NewEmployee',
    component: NewEmployee
  },



  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
