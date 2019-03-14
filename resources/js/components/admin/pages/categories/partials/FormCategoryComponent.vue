<template>
    <div>
        
        <form class="form" @submit.prevent="onSubmit">

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
    props: {
        category: {
            require: false,
            type: Object|Array,
            default: () => {
                return {
                    id: '',
                    name: '',
                }
            }
        },
        updating: {
            require: false,
            type: Boolean,
            default: false,
        }
    },
    methods: {
        onSubmit () {
            const action = this.updating ? 'updateCategory' : 'storeCategory'

            this.$store.dispatch(action, this.category)
                            .then(() => this.$router.push({name: 'admin.categories'}))
                            .catch()
        }
    }
}
</script>

<style scoped>

</style>