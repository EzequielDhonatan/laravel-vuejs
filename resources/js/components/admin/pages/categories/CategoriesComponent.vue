<template>
    <div>
        
        <h1>Listagem da Categoria</h1>
        <router-link class="btn btn-success" :to="{name: 'admin.categories.create'}">Cadastrar</router-link>

        <table class="table table-dark">

            <thead>
                <th>ID</th>
                <th>NOME</th>
                <th width="200">AÇÕES</th>
            </thead>

            <tbody>
                <tr v-for="(category, index) in categories.data" :key="index">
                    <td>{{ category.id }}</td>
                    <td v-text="category.name"></td>
                    <td>
                        <router-link class="btn btn-info" :to="{name: 'admin.categories.edit', params: {id: category.id}}">
                            Editar
                        </router-link>

                        <a href="" class="btn btn-danger" @click.prevent="destroy(category)">Excluir</a>
                    </td>
                </tr>
            </tbody>
            
        </table> <!-- table table-dark -->

    </div>
</template>

<script>
import axios from 'axios'

export default {
    created () {
        this.loadCategories ()
    },
    computed: {
        categories () {
            return this.$store.state.categories.items
        }
    },
    methods: {
        loadCategories () {
            this.$store.dispatch('loadCategories')
        },

        destroy (category) {
            this.$store.dispatch('destroyCategory', category.id)
                            .then(() => {
                                this.$snotify.success(`Sucesso ao deletar a categoria: ${category.name}`)

                                this.loadCategories ()
                            })
                            .catch(error => {
                                this.$snotify.error('Erro ao deletar a categoria', 'Falha')
                            })
        }
    }
}
</script>

<style scoped>

</style>