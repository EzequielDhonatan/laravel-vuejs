import Vue from 'vue'
import Vuex from 'vuex'

import Categories from './modules/categories/categories'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        categories: Categories
    }
})