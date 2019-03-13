require('./bootstrap');
window.Vue = require('vue');

import router from './routes/index'
import store from './vuex/store'

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
