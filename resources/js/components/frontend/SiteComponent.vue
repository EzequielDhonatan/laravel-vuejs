<template>
    <div>
        
        <header-site></header-site>

        <router-view></router-view>

        <footer-site></footer-site>

    </div>
</template>

<script>
import SiteHeaderComponent from './SiteHeaderComponent' // HEADER
import SiteFooterComponent from './SiteFooterComponent' // FOOTER

export default {
    components: {
        headerSite: SiteHeaderComponent, // HEADER
        footerSite: SiteFooterComponent // FOOTER
    }
}
</script>

<style scoped>

</style>