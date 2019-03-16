<template>
    <div>
        
        <h1>Produtos</h1>

        <div class="row">
            
            <item 
                v-for="product in products.data" 
                :key="product.id"
                :item="product"
                :path="'products'">
            </item>

        </div> <!-- row -->

        <hr>

        <paginate 
            :pagination="products"
            @paginate="loadProducts">
        </paginate>

    </div>
</template>

<script>
import PaginationComponent from '../../../layouts/PaginationComponent'
import Item from '../../../layouts/Item'

export default {
    created () {
        this.$store.dispatch('loadProducts', {})
        /*
        if (this.products.data.length == 0)
            this.$store.dispatch('loadProducts', {})
        */
    },
    computed: {
        products () {
            return this.$store.state.products.items
        }
    },
    methods:{
        loadProducts (page = 1) {
            this.$store.dispatch('loadProducts', {page})
        }
    },
    components: {
        paginate: PaginationComponent, // PAGINATION
        Item // ITEM
    }
}
</script>

<style scoped>

</style>
