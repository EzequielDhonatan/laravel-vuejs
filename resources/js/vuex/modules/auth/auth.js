export default {
    state: {
        me: {},
        authenticated: false,
    },

    mutations: {

    },

    actions: {
        login (context, params) {
            axios.post('/api/auth', params)
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
        }
    }
}