<template>
    <div class="col-md-3">
        
        <div v-if="item.image">
            <img :src="[`/storage/${path}/${item.image}`]" :alt="item.name" class="img-list">
        </div>

        <div v-else="">
            <img src="/images/no-image.jpg" :alt="item.name" class="img-list">
        </div>

        {{ item.name }}

    </div> <!-- col-md-12 -->
</template>

<script>
export default {
    props: ['item', 'path']
}
</script>

<style scoped>
.img-list {
    max-width: 100px;
}
</style>