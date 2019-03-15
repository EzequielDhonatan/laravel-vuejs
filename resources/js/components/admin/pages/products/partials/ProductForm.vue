<template>
    <div>
        
        <form class="form">

          <div :class="['form-group', {'has-error': errors.name}]">
              <div v-if="errors.name">{{ errors.name[0] }}</div>
              <input type="text" v-model="product.name" class="form-control" placeholder="Nome da Produto">
          </div>

          <div :class="['form-group', {'has-error': errors.description}]">
              <div v-if="errors.description">{{ errors.description[0] }}</div>
              <textarea class="form-control" cols="30" rows="10" placeholder="Descrição do Produto" v-model="product.description"></textarea>
          </div>

          <div class="form-group">
              <button type="submit" class="btn btn-primary">Enviar</button>
          </div>

      </form> <!-- form -->

    </div>
</template>

<script>
export default {
    data () {
        return {
            product: {
                name: '',
                description: ''
            },
            errors: {}
        }
    }
}
</script>

<style scoped>

</style>