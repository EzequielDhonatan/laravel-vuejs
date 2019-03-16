import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../vuex/store'

import AdminComponent from '../components/admin/AdminComponent'; // ADMIN
import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'; // DASHBOARD

// BACKEND - CATEGORIES
import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'; // HOME
import AddCategoryComponent from '../components/admin/pages/categories/AddCategoryComponent'; // CREATE
import EditCategoryComponent from '../components/admin/pages/categories/EditCategoryComponent'; // EDIT

// BACKEND - PRODUCTS
import ProductsComponent from '../components/admin/pages/products/ProductsComponent' // HOME

// FRONT END 
import SiteComponent from '../components/frontend/SiteComponent' // LAYOUT
import HomeComponent from '../components/frontend/pages/home/HomeComponent' // HOME
import ContactComponent from '../components/frontend/pages/contact/ContactComponent' // CONTACT
import ProductDetail from '../components/frontend/pages/product/ProductDetail' // PRODUCT DETAIL
import CartComponent from '../components/frontend/pages/cart/CartComponent' // CART
import LoginComponent from '../components/frontend/pages/login/LoginComponent' // LOGIN

Vue.use(VueRouter)

const routes = [
    // FRONTEND
    {
        path: '/', 
        component: SiteComponent,
        children: [
            {path: 'login', component: LoginComponent, name: 'login'}, // LOGIN
            {path: 'cart', component: CartComponent, name: 'cart'}, // CART
            {path: 'produto/:id', component: ProductDetail, name: 'product.detail', props: true}, // PRODUCT DETAIL
            {path: 'contact', component: ContactComponent, name: 'contact'}, // CONTACT
            {path: '', component: HomeComponent, name: 'home'}, // HOME
        ]
    },
    
    // BACKEND
    {path: '/admin', 
        component: AdminComponent,
        children: [
            // ADMIN
            {path: '', component: DashboardComponent, name: 'admin.dashboard'}, // DASHABOARD

            // CATEGORIES
            {path: 'categories', component: CategoriesComponent, name: 'admin.categories'}, // HOME
            {path: 'categories/create', component: AddCategoryComponent, name: 'admin.categories.create'}, // CREATE
            {path: 'categories/:id/edit', component: EditCategoryComponent, name: 'admin.categories.edit', props: true}, // EDIT

            // PRODUCTS
            {path: 'products', component: ProductsComponent, name: 'admin.products', meta: {auth: true}}, // HOME
        ]
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !store.state.auth.authenticated) {
        return router.push({name: 'login'})
    }

    next()
})

export default router