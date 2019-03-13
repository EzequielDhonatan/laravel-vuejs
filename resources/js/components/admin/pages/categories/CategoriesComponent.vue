<template>
    <div>
        
        <h1>Listagem da Categoria</h1>
        <router-link class="btn btn-success" :to="{name: 'admin.categories.create'}">Cadastrar</router-link>

        <table class="table table-dark">

            <thead>
                <th>ID</th>
                <th>NOME</th>
                <th width="100">AÇÕES</th>
            </thead>

            <tbody>
                <tr v-for="(category, index) in categories.data" :key="index">
                    <td>{{ category.id }}</td>
                    <td v-text="category.name"></td>
                    <td>...</td>
                </tr>
            </tbody>
            
        </table> <!-- table table-dark -->

    </div>
</template>

<script>
import axios from 'axios'

export default {
    created () {
        this.$store.dispatch('loadCategories')
    },
    computed: {
        categories () {
            return this.$store.state.categories.items
        }
    }
}
</script>

<style scoped>

</style>