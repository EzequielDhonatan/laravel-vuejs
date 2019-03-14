<template>
    <div>
        
        <h1>Editar Categoria</h1>

        <form class="form" @submit.prevent="submitForm">

            <div class="form-group">
                <input type="" class="form-control" v-model="category.name" placeholder="Nome da Categoria">
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
            category: {
                name: ''
            }
        }
    },
    props: {
        id: {
            require: true
        }
    },
    created () {
        this.$store.dispatch('loadCategory', this.id)
                        .then(response => this.category = response)
                        .catch(error => {
                            console.log(error)
                        })
    }
}
</script>

<style scoped>

</style>