<template>
    <div>
        
        <h1>Adicionar nova categoria</h1>

        <form class="form" @submit.prevent="submitForm">

            <div class="form-group">
                <input type="" class="form-control" placeholder="Nome da Categoria" v-model="name">
                <!--
                <input type="" class="form-control" placeholder="Nome da Categoria" v-model="form.name">
                -->
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>

        </form>

    </div>
</template>

<script>
export default {
    data () {
        return {
            name: ''

            /*
            formData: {
                name: ''
            }
            */
        }
    },
    methods: {
        submitForm () {
            this.$store.dispatch('storeCategory', {name: this.name})
                            .then(() => this.$router.push({name: 'admin.categories'}))
                            .catch()
        }
    }
}
</script>

<style scoped>

</style>