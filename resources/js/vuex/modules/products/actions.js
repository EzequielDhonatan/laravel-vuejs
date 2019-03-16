import axios from 'axios'
import { URL_BASE } from '../../../config/configs'

const RESOURCE = 'products'

const CONFIGS = {
    headers: {
        'content-type' : 'multipart/form-data',
    }
}

export default {

    // CARREGAR PRODUTOS / CADASTRAR
    loadProducts (context, params) {
        context.commit('PRELOADER', true)

        axios.get(`${URL_BASE}${RESOURCE}`, {params})
                .then(response => context.commit('LOAD_PRODUCTS', response.data))
                .catch(error => {
                    console.log(error)
                })
                .finally(() => context.commit('PRELOADER', false))
    },

    // CARREGAR EDITAR / ATUALIZAR
    loadProduct (context, id) {
        context.commit('PRELOADER', true)

            return new Promise((resolve, reject) => {
                axios.get(`${URL_BASE}${RESOURCE}/${id}`,)
                        .then(response => resolve(response.data))
                        .catch(error => reject())
                        .finally(() => context.commit('PRELOADER', false))
                })
    },

    // CADASTRAR
    storeProduct (context, formData) {
        context.commit('PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.post(`${URL_BASE}${RESOURCE}`, formData, CONFIGS)
                    .then(response => resolve())
                    .catch(error => {
                        context.commit('PRELOADER', false)
                        
                        reject(error.response)
                    })
                    // .finally(() => context.commit('PRELOADER', false))
        })
    },

    // EDITAR / ATUALIZAR
    updateProduct (context, params) {
        context.commit('PRELOADER', true)
        
        return new Promise((resolve, reject) => {
            axios.put(`${URL_BASE}${RESOURCE}/${params.id}`, params)
                    .then(response => resolve())
                    .catch(error => {
                        context.commit('PRELOADER', false)
                        
                        reject(error.response)
                    })
                    // .finally(() => context.commit('PRELOADER', false))
        })
    },

    // DELETAR
    destroyProduct (context, id) {
        context.commit('PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.delete(`${URL_BASE}${RESOURCE}/${id}`)
                    .then(response => resolve())
                    .catch(error => {
                        reject()
                        
                        context.commit('PRELOADER', false)
                    })
                    // .finally(() => context.commit('PRELOADER', false))
        })
    }
}