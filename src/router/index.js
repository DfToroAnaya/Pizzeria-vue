import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

import Employees from '../views/Employees';
import NewEmployee from '../components/Employee/NewEmployee.vue'
import EditarEmployee from '../components/Employee/EditarEmployee.vue'


import Pizza_ingredients from '../views/Pizza_ingredients';
import NewPizza_ingredient from '../components/Pizza_ingredients/NewPizza_ingredient.vue'
import EditarPizza_ingredient from '../components/Pizza_ingredients/EditarPizza_ingredient.vue'



import Branches from '../views/Branches';
import NewBranche from '../components/Branches/NewBranche.vue'
import EditarBranche from '../components/Branches/EditarBranche.vue'







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
    path: '/pizza_ingredients',
    name: 'Pizza_ingredients',
    component: Pizza_ingredients
  },

  {
    path: '/editar-pizza_ingredient/:id',
    name: 'EditarPizza_ingredient',
    component: EditarPizza_ingredient
  },

  {
    path: '/add-pizza_ingredient/',
    name: 'Newpizza_ingredient',
    component: NewPizza_ingredient
  },


  {
    path: '/branches',
    name: 'Branches',
    component: Branches
  },

  {
    path: '/editar-branche/:id',
    name: 'EditarBranche',
    component: EditarBranche
  },

  {
    path: '/add-branche/',
    name: 'Newbranche',
    component: NewBranche
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
