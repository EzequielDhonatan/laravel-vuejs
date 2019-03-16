<template>
    <div>
        
        <h1>Produtos</h1>

        <search @search="search"></search>

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
import PaginationComponent from '../../../layouts/PaginationComponent' // PAGINATION
import Item from '../../../layouts/Item' // ITEM
import SearchComponent from '../../../admin/layouts/SearchComponent' // SEARCH
 
export default {
    created () {
        this.$store.dispatch('loadProducts', {})
        /*
        if (this.products.data.length == 0)
            this.$store.dispatch('loadProducts', {})
        */
    },
    
    data () {
        return {
            filter: ''
        }
    },

    computed: {
        products () {
            return this.$store.state.products.items
        },
        params () {
            return {
                filter: this.filter,
                page: this.products.current_page,
            }
        }
    },

    methods:{
        loadProducts (page = 1) {
            this.$store.dispatch('loadProducts', {...this.params, page})
        },

        search (filter) {
            this.filter = filter

            this.loadProducts()
        }
    },

    components: {
        paginate: PaginationComponent, // PAGINATION
        Item, // ITEM
        search: SearchComponent, // SEACH
    }
}
</script>

<style scoped>

</style>
