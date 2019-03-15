<template>
    <div>
        
        <form class="form form-inline" @submit.prevent="search">
            <input type="text" class="form-control mr-sm-2" v-model="filter" placeholder="Pesquisar">

            <button type="submit" class="btn btn-outline-success">Pesquisar</button>

            <div v-if="filter">
                <p>Resultados para: {{ filter }}</p>
            </div>
        </form> <!-- form form-inline -->

    </div>
</template>

<script>
export default {
    data () {
        return {
            filter: ''
        }
    },
    methods: {
        search () {
            this.$emit('search', this.filter)
        }
    }
}
</script>

<style scoped>
form {
    margin: 5px;
}
</style>