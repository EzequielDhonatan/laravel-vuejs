require('./bootstrap')
window.Vue = require('vue')

/* Vue SNotify  */
import SNotify from 'vue-snotify'

import router from './routes/index'
import store from './vuex/store'

/* Vue SNotify  */
Vue.use(SNotify, {toast: {showProgressBar: false}})

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
