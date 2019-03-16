<template>
    <div>
        
        Home Page

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

</style>
