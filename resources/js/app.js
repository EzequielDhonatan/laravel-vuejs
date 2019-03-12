require('./bootstrap');
window.Vue = require('vue');

import router from './routes/index'

/**
 * Components Globais
 */
Vue.component('test-component', require('./components/TestComponent').default)

const app = new Vue({
    router,
    el: '#app'
});
