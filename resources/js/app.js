require('./bootstrap');
window.Vue = require('vue');

import router from './routes/index'
import store from './vuex/store'

/**
 * Components Globais
 */
Vue.component('test-component', require('./components/TestComponent').default)

const app = new Vue({
    router,
    store,
    el: '#app'
});
