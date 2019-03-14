<template>
    <div>
        
        <h1>Editar Categoria</h1>

        <form-cat 
            :category="category"
            :updating="true">
        </form-cat>

    </div>
</template>

<script>
import FormCategoryComponent from './partials/FormCategoryComponent';

export default {
    data () {
        return {
            category: {}
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
    },
    components: {
        formCat: FormCategoryComponent
    }
}
</script>

<style scoped>

</style>