<template>
    <div>
        
        <a href="#" class="btn btn-danger" @click.prevent="confirmDelete(item)">
            Deletar
        </a>

    </div>
</template>

<script>
export default {
    props: {
        item: {
            require: true,
            type: Object
        }
    },
    methods: {
        // MODAL DELETAR
        confirmDelete (item) {
            this.$snotify.error(`Deseja ralmente deletar o produto ${item.name}`, 'Confirmar?', {
                timout: 10000,
                showProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                buttons: [
                    {text: 'Não', action: () => console.log('Não')},
                    {text: 'Sim', action: () => this.$emit('destroy', item.id)}
                ]
            })
        }
    }
}
</script>

<style scoped>

</style>
