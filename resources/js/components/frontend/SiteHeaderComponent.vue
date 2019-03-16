<template>
    <div>
        
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'contact'}">Contact</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>