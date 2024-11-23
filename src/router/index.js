import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Pizza_Sizes from '../views/Pizza_Sizes';
import EditarPizza_Size from '../components/Pizza_Size/EditarPizza_Size';
import NewPizza_Size from '../components/Pizza_Size/NewPizza_Size';
import Suppliers from '../views/Suppliers.vue';
import EditarSupplier from '../components/Supplier/EditarSupplier';
import NewSupplier from '../components/Supplier/NewSupplier';
import Raw_Materials from '../views/Raw_Materials.vue';
import EditarRaw_Material from '../components/Raw_Material/EditarRaw_Material.vue';
import NewRaw_Material from '../components/Raw_Material/NewRaw_Material.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pizza_sizes',
    name: 'Pizza_Sizes',
    component: Pizza_Sizes
  },
  {
    path: '/editar-pizza_size/:id',
    name: 'EditarPizza_Size',
    component: EditarPizza_Size
  },
  {
    path: '/add-pizza_size/',
    name: 'NewPizza_Size',
    component: NewPizza_Size
  },
  {
    path: '/suppliers',
    name: 'Suppliers',
    component: Suppliers
  },
  {
    path: '/editar-supplier/:id',
    name: 'EditarSupplier',
    component: EditarSupplier
  },
  {
    path: '/add-supplier/',
    name: 'NewSupplier',
    component: NewSupplier
  },
  {
    path: '/raw_material',
    name: 'Raw_Materials',
    component: Raw_Materials
  },
  {
    path: '/editar-raw_material/:id',
    name: 'EditarRaw_Material',
    component: EditarRaw_Material
  },
  {
    path: '/add-raw_material/',
    name: 'NewRaw_Material',
    component: NewRaw_Material
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
