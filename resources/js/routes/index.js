import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminComponent from '../components/admin/AdminComponent'; // ADMIN
import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'; // DASHBOARD

// CATEGORIES
import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'; // HOME
import AddCategoryComponent from '../components/admin/pages/categories/AddCategoryComponent'; // CREATE
import EditCategoryComponent from '../components/admin/pages/categories/EditCategoryComponent'; // EDIT

// PRODUCTS
import ProductsComponent from '../components/admin/pages/products/ProductsComponent' // HOME

Vue.use(VueRouter)

const routes = [
    {path: '/admin', 
        component: AdminComponent,
        children: [
            {path: '', component: DashboardComponent, name: 'admin.dashboard'},

            // CATEGORIES
            {path: 'categories', component: CategoriesComponent, name: 'admin.categories'}, // HOME
            {path: 'categories/create', component: AddCategoryComponent, name: 'admin.categories.create'}, // CREATE
            {path: 'categories/:id/edit', component: EditCategoryComponent, name: 'admin.categories.edit', props: true}, // EDIT

            // PRODUCTS
            {path: 'products', component: ProductsComponent, name: 'admin.products'}, // HOME
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router