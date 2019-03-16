<template>
    <div>
        
        <h1 class="text-center">Listagem de Produtos</h1>

        <div class="row">
            <div class="col-md-6">
                <button class="btn btn-success" @click.prevent="create">Novo</button>
            </div>

            <vodal
                :show="showModal"
                animation="zoom"
                @hide="hideModal"
                :width="600"
                :height="500">
                <product-form 
                    @success="success"
                    :update="update"
                    :product="product"
                ></product-form>
            </vodal>

            <div class="col-md-6">
                <search @search="searchForm"></search>
            </div>
        </div> <!-- row -->

        <table class="table table-dark">

            <thead>
                <th>ID</th>
                <th width="500">IMAGEM</th>
                <th>NOME</th>
                <th width="200">AÇÕES</th>
            </thead>

            <tbody>
                <tr v-for="(product, index) in products.data" :key="index">
                    <td>{{ product.id }}</td>
                    <td>
                        <div v-if="product.image">
                            <img :src="[`/storage/products/${product.image}`]" alt="product.name" class="img-list">
                        </div>
                    </td>
                    <td>{{ product.name }}</td>
                    <td>
                        <a href="#" class="btn btn-info" @click.prevent="edit(product.id)">Editar</a>
                        <destroy :item="product" @destroy="destroy"/>
                    </td>
                </tr>
            </tbody>
            
        </table> <!-- table table-dark -->

        <!--
        <ul v-if="products.last_page > 1">
            <li v-if="products.current_page > 1">
                <a href="#" @click.prevent="loadProducts(products.current_page - 1)">Anterior</a>
            </li>
            <li v-if="products.current_page < products.last_page">
                <a href="#" @click.prevent="loadProducts(products.current_page + 1)">Próxima</a>
            </li>
        </ul>
        -->

        <pagination :pagination="products" :offset="6" @paginate="loadProducts"></pagination>

    </div>
</template>

<script>
import Vodal from 'vodal' // VODAL

import PaginationComponent from '../../../layouts/PaginationComponent' // PAGINATION
import SearchComponent from '../../layouts/SearchComponent' // SEARCH
import ProductForm from './partials/ProductForm' // PRODUCT FORM
import ButtonDestroyComponent from '../../layouts/ButtonDestroyComponent' // BUTTON | MODAL DESTROY

export default {
    created () {
        this.loadProducts(1)
    },
    data () {
    return {
        search: '',
        showModal: false,
        product: {
            id: '',
            name: '',
            description: '',
            category_id: '',
        },
        update: false,
        }
    },
    computed: {
        products () {
            return this.$store.state.products.items
        },
        params () {
            return {
                page: this.products.current_page,
                filter: this.search,
            }
        }
    },
    methods: {
        loadProducts (page) {
            this.$store.dispatch('loadProducts', {...this.params, page})
        },

        // CADASTRO
        create () {
            this.update = false

            this.reset()

            this.showModal = true
        },

        // EDITAR
        edit (id) {
            this.reset()

            this.$store.dispatch('loadProduct', id)
                            .then(response => {
                                this.product =  response

                                this.showModal = true

                                this.update = true
                            })
                            .catch(() => {
                                this.$snotify.error('Erro ao carregar o produto')
                            })
        },


        // PESQUISAR
        searchForm (filter) {
            this.search = filter

            this.loadProducts (1)
        },
        
        // MODAL
        hideModal () {
            this.showModal = false
        },
        
        success () {
            this.hideModal()

            this.loadProducts(1)
        },

        // RESETAR DADOS
        reset () {
            this.product = {
                id: '',
                name: '',
                description: '',
                category_id: '',
            }
        },

        // DELETAR
        destroy (id) {
            this.$store.dispatch('destroyProduct', id)
                        .then(() => {
                        this.$snotify.success('Deletado com sucesso!')

                        this.loadProducts(1)
                        })
                        .catch(() => this.$snotify.error('Erro ao deletar'))
        }
    },
    components: {
        pagination: PaginationComponent, // PAGINATION
        search: SearchComponent, // SEARCH,
        Vodal, // VODAL
        ProductForm, // PRODUCT FORM
        destroy: ButtonDestroyComponent // BUTTON | MODAL DESTROY
    }
}
</script>

<style scoped>
.img-list {
    max-width: 100px;
}
</style>