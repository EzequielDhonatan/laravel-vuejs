<template>
    <div>
        
        <form class="form" @submit.prevent="onSubmit">

            <div :class="['form-group', {'has-error': errors.name}]">
                <div v-if="errors.name">{{ errors.name[0] }}</div>
                <input type="text" v-model="product.name" class="form-control" placeholder="Nome do Produto">
            </div>

            <div :class="['form-group', {'has-error': errors.description}]">
                <div v-if="errors.description">{{ errors.description[0] }}</div>
                <textarea v-model="product.description" cols="30" rows="10" class="form-control" placeholder="Descrição do Produto"></textarea>
            </div>

          <div class="form-group">
              <button type="submit" class="btn btn-primary">Enviar</button>
          </div>

      </form> <!-- form -->

    </div>
</template>

<script>
export default {
    props: {
        update: {
            require: false,
            type: Boolean,
            default: false
        },
        product: {
            require: false,
            type: Object,
            default: () => {
                return {
                    id: '',
                    name: '',
                    description: '',
                    category_id: 13
                }
            }
        }
    },
    data () {
        return {
            errors: {}
        }
    },
    methods: {
        onSubmit () {
            this.$store.dispatch('storeProduct', this.product)
                            .then(() => {
                                this.$snotify.success('Sucesso ao cadastrar!')

                                this.reset()

                                this.$emit('success')
                            })
                            .catch(errors => {
                                this.$snotify.error('Algo Errado', 'Erro')

                                this.errors = errors.data.errors
                            })
        },

        reset () {
            this.errors = {}  // RESET ERRORS

            this.product = {
                    id: '',
                    name: '',
                    description: '',
                    category_id: 13
            } // RESET PRODUCT
        }
    }
}
</script>

<style scoped>

</style>