<template>
    <div>
        
        <h1>Listagem da Categoria</h1>

        <div class="row">
            <div class="col-md-6">
                <router-link class="btn btn-success" :to="{name: 'admin.categories.create'}">Cadastrar</router-link>
            </div>

            <div class="col-md-6">
                <search @searchCategory="search"></search>
            </div>
        </div> <!-- row -->

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

                        <a href="" class="btn btn-danger" @click.prevent="confirmDestroy(category)">Excluir</a>
                    </td>
                </tr>
            </tbody>
            
        </table> <!-- table table-dark -->

    </div>
</template>

<script>
import axios from 'axios' // AXIOS

import SearchCategoryComponent from './partials/SearchCategoryComponent'

export default {
    created () {
        // LOAD
        this.loadCategories ()
    },
    data () {
        return {
            // SEARCH
            name: '',
        }
    },
    computed: {
        // CATEGORIES
        categories () {
            return this.$store.state.categories.items
        }
    },
    methods: {
        // LOAD
        loadCategories () {
            this.$store.dispatch('loadCategories', {name: this.name})
        },

        // CONFIRMAR DELETAR
        confirmDestroy (category) {
        this.$snotify.error(`Deseja realmente deletar a categoria: ${category.name}`, 'Deletar?', {
                timout: 10000,
                showProgressBar: true,
                closeOnClick: true,
                buttons: [
                {text: 'Não', action: () => console.log('Não deletou...')},
                {text: 'Sim', action: () => this.destroy(category)}
                ]
            })
        },

        // DELETAR
        destroy (category) {
            this.$store.dispatch('destroyCategory', category.id)
                            .then(() => {
                            this.$snotify.success(`Sucesso ao deletar a categoria: ${category.name}`)

                            this.loadCategories()
                            })
                            .catch(error => {
                            console.log(error)

                            this.$snotify.error('Erro ao deletar a categoria', 'Falha')
                            })
        },

        // SEARCH
        search (filter) {
            this.name = filter

            this.loadCategories()
        }
    },
    components: {
        search: SearchCategoryComponent
    }
}
</script>

<style scoped>

</style>