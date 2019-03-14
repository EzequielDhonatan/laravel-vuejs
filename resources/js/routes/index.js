import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminComponent from '../components/admin/AdminComponent'; // ADMIN
import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'; // DASHBOARD

import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'; // CATEGORIES
import AddCategoryComponent from '../components/admin/pages/categories/AddCategoryComponent'; // CATEGORY CREATE
import EditCategoryComponent from '../components/admin/pages/categories/EditCategoryComponent'; // CATEGORY EDIT

Vue.use(VueRouter)

const routes = [
    {path: '/admin', 
        component: AdminComponent,
        children: [
            {path: '', component: DashboardComponent, name: 'admin.dashboard'},
            {path: 'categories', component: CategoriesComponent, name: 'admin.categories'}, // CATEGORIES
            {path: 'categories/create', component: AddCategoryComponent, name: 'admin.categories.create'}, // CATEGORY CREATE
            {path: 'categories/:id/edit', component: EditCategoryComponent, name: 'admin.categories.edit', props: true}, // CATEGORY EDIT
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router