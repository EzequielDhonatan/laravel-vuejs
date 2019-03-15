require('./bootstrap')
window.Vue = require('vue')

// Vue SNotify
import SNotify from 'vue-snotify'

// Vue Router
import router from './routes/index'

// Vuex
import store from './vuex/store'

// Vodal
import Vodal from 'vodal';

// Vue SNotify
Vue.use(SNotify, {toast: {showProgressBar: false}})

// VODAL
Vue.component(Vodal);

/**
 * Components Globais
 */
// Vue.component('test-component', require('./components/TestComponent').default)
Vue.component('admin-component', require('./components/admin/AdminComponent').default) // CATEGORIES
Vue.component('preloader-component', require('./components/layouts/PreloaderComponent').default) // PRELOADER

const app = new Vue({
    router,
    store, 
    el: '#app'
});

// LOAD CATEGORIES
store.dispatch('loadCategories')
