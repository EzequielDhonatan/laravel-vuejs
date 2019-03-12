require('./bootstrap');

window.Vue = require('vue');

/**
 * Components Globais
 */
Vue.component('test-component', require('./components/TestComponent').default)

const app = new Vue({
    el: '#app'
});
