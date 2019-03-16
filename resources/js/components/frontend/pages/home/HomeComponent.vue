<template>
    <div>
        
        <h1>Produtos</h1>

        <div class="row">
            <div class="col-md-3" v-for="product in products.data" :key="product.id">
                <div v-if="product.image">
                    <img :src="[`/storage/products/${product.image}`]" alt="product.name" class="img-list">
                </div>
                {{ product.name }}
            </div>
        </div> <!-- row -->

    </div>
</template>

<script>
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
    }
}
</script>

<style scoped>
.img-list {
    max-width: 100px;
}
</style>
