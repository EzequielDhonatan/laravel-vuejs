<template>
    <div>
        
        <h1 class="text-center">Listagem de Produtos</h1>

        <table class="table table-dark">

            <thead>
                <th>ID</th>
                <th>IMAGEM</th>
                <th>NOME</th>
                <th width="200">AÇÕES</th>
            </thead>

            <tbody>
                <tr v-for="(product, index) in products.data" :key="index">
                    <td>{{ product.id }}</td>
                    <td>...</td>
                    <td>{{ product.name }}</td>
                    <td>
                        <a href="" class="btn btn-info">Editar</a>
                        <a href="" class="btn btn-danger">Deletar</a>
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

        <pagination
            :pagination="products"
            :offset="6"
            @paginate="loadProducts">

        </pagination>

    </div>
</template>

<script>
import PaginationComponent from '../../../layouts/PaginationComponent'

export default {
    created () {
        this.loadProducts(1)
    },
    computed: {
        products () {
            return this.$store.state.products.items
        },
        params () {
            return {
                page: this.products.current_page
            }
        }
    },
    methods: {
        loadProducts (page) {
            this.$store.dispatch('loadProducts', {...this.params, page})
        }
    },
    components: {
        pagination: PaginationComponent
    }
}
</script>

<style scoped>

</style>