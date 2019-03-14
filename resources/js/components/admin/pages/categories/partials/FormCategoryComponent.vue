<template>
    <div>
        
        <form class="form" @submit.prevent="onSubmit">

            <div :class="['form-group', {'has-error': errors.name}]">
                <div v-if="errors.name">{{ errors.name[0] }}</div>
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
            errors: {}
        }
    },
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
                        .then(() => {
                            this.$snotify.success('Sucesso ao cadastrar')

                            this.$router.push({name: 'admin.categories'})
                        })
                        .catch(error => {
                            this.$snotify.error('Algo Errado', 'Erro')

                            console.log(error.response.data.errors)
                            this.errors = error.response.data.errors
                        })
        }
    }
}
</script>

<style scoped>
.has-error{
    color: red;
}

.has-error input{
    border: 1px solid red;
}
</style>