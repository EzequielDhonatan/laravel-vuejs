<template>
    <div class="col-md-3">
        <router-link :to="{name: 'product.detail', params: {id: item.id}}">
            <div v-if="item.image">
                <img :src="[`/storage/${path}/${item.image}`]" :alt="item.name" class="img-list">
            </div>

            <div v-else="">
                <img src="/images/no-image.jpg" :alt="item.name" class="img-list">
            </div>

            <p>{{ item.name }}</p>
        </router-link>

        <button-cart :product="item"></button-cart>

    </div> <!-- col-md-12 -->
</template>

<script>
import ButtonCart from './ButtonCart';

export default {
    props: ['item', 'path'],

    components: {
        ButtonCart // BUTTON CART
    }
}
</script>

<style scoped>
.img-list {
    max-width: 100px;
}
</style>