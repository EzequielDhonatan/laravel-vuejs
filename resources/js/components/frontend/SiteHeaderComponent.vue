<template>
    <div>
        
        <ul class="nav">

            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'home'}">HOME</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'contact'}">CONTATO</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'cart'}">CARRINHO ({{ cart.length }})</router-link>
            </li>

            <li class="nav-item" v-if="me.name">
                <router-link :to="{name: 'admin.dashboard'}" class="nav-link">
                    Olá {{ me.name }}! (<a @click.prevent="logout">Sair</a>)
                </router-link>
            </li>

            <li class="nav-item" v-else>
                <router-link :to="{name: 'login'}" class="nav-link">LOGIN</router-link>
            </li>

        </ul> <!-- nav -->

    </div>
</template>

<script>
export default {
    computed: {
        cart () {
            return this.$store.state.cart.products
        },

        me () {
            return this.$store.state.auth.me
        }
    },

    methods: {
        logout () {
            this.$store.dispatch('logout')
        }
    }
}
</script>
