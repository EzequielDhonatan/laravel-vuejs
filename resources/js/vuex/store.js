import Vue from 'vue'
import Vuex from 'vuex'

import preloader from './modules/preloader/preloader' // PRELOADER
import Categories from './modules/categories/categories' // CATEGORIES
import products from './modules/products/products' // PRODUCTS

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        preloader,
        categories: Categories,
        products,
    }
})