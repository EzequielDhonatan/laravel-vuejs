import Vue from 'vue'
import Vuex from 'vuex'

import Categories from './modules/categories/categories' // CATEGORIES
import preloader from './modules/preloader/preloader' // PRELOADER

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        categories: Categories,
        preloader
    }
})