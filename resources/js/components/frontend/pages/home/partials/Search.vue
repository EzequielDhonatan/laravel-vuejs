<template>
    <div>
        
        <form class="form form-inline" @submit.prevent="search">

            <select class="form-control" v-model="category_id">
                <option value="">Selecione a Categoria</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </select>

            <input type="text" class="form-control mr-sm-2" v-model="filter" placeholder="Pesquisar">
            <button type="submit" class="btn btn-outline-success">Pesquisar</button>

        </form> <!-- form form-inline -->

    </div>
</template>

<script>
export default {
    data () {
        return {
            filter: '',
            category_id: '',
        }
    },

    computed: {
        categories () {
            return this.$store.state.categories.items.data
        }
    },

    methods: {
        search () {
            this.$emit('search', {
                filter: this.filter,
                category_id: this.category_id
            })
        }
    }
}
</script>

<style scoped>
form {
    margin: 5px;
}
</style>