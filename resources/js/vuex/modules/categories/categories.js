export default {
    state: {
        items: {
            data: []
        }
    },
    mutations: {
        LOAD_CATEGORIES (state, categories) {
            state.items = categories
        }
    },
    actions: {
        // LISTAR
        loadCategories (context, params) {
            context.commit('PRELOADER', true) // STAT PRELOADER

            axios.get('/api/v1/categories', {params})
              .then(response => {
                console.log(response)

                context.commit('LOAD_CATEGORIES', response)
              })
              .catch(errors => {
                console.log(errors)
              })
              .finally(() => context.commit('PRELOADER', false)) // STOP PRELOADER
        },

        // EDITAR
        loadCategory (context, id) {
            context.commit('PRELOADER', true) // STAT PRELOADER

            return new Promise((resolve, reject) => {
                axios.get(`/api/v1/categories/${id}`)
                        .then(response => resolve(response.data))
                        .catch(error => reject(error))
                        .finally(() => context.commit('PRELOADER', false)) // STOP PRELOADER
            })

        },

        // CADASTRAR
        storeCategory (context, params) {
            context.commit('PRELOADER', true) // STAT PRELOADER

            return new Promise((resolve, reject) => {
                axios.post('/api/v1/categories', params)
                        .then(response => resolve())
                        .catch(error => reject(error))
                        .finally(() => context.commit('PRELOADER', false)) // STOP PRELOADER
            })
        },

        // ATUALIZAR
        updateCategory (context, params) {
            context.commit('PRELOADER', true) // STAT PRELOADER

            return new Promise((resolve, reject) => {
                axios.put(`/api/v1/categories/${params.id}`, params)
                        .then(response => resolve())
                        .catch(error => reject(error))
                        .finally(() => context.commit('PRELOADER', false)) // STOP PRELOADER
            })
        },

        // DELETAR
        destroyCategory (context, id) {
            context.commit('PRELOADER', true) // STAT PRELOADER

            return new Promise((resolve, reject) => {
                axios.delete(`/api/v1/categories/${id}`)
                        .then(response => resolve())
                        .catch(error => reject(error))
                        // .finally(() => context.commit('PRELOADER', false)) // STOP PRELOADER
            })
        }
    },
    getters: {

    }
}