<template>
    <div>
        
        <h1>Produtos</h1>

        <div class="row">

            <div class="col-md-3" v-for="product in products.data" :key="product.id">

                <div v-if="product.image">
                    <img :src="[`/storage/products/${product.image}`]" :alt="product.name" class="img-list">
                </div>

                <div v-else="">
                    <img src="/images/no-image.jpg" :alt="product.name" class="img-list">
                </div>

                {{ product.name }}

            </div> <!-- col-md-3 -->

        </div> <!-- row -->

        <hr>

        <paginate 
            :pagination="products"
            @paginate="loadProducts">
        </paginate>

    </div>
</template>

<script>
import PaginationComponent from '../../../layouts/PaginationComponent';

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
        paginate: PaginationComponent
    }
}
</script>

<style scoped>
.img-list {
    max-width: 100px;
}
</style>
