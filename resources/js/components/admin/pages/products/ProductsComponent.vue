<template>
    <div>
        
        <h1 class="text-center">Listagem de Produtos</h1>

        <div class="row">
            <div class="col-md-6">
                <router-link class="btn btn-success">Cadastrar</router-link>
            </div>
        </div> <!-- row -->

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

    </div>
</template>

<script>
export default {
    created () {
        this.loadProducts()
    },
    computed: {
        products () {
            return this.$store.state.products.items
        }
    },
    methods: {
        loadProducts () {
            this.$store.dispatch('loadProducts')
        }
    }
}
</script>

<style scoped>

</style>