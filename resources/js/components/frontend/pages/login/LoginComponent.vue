<template>
    <div class="container">

        <div class="row justify-content-center">

            <div class="col-md-8">

                <form class="form" @submit.prevent="login">

                    <div class="card">

                        <div class="card-header">
                            <h1>Login</h1>
                        </div>

                        <div class="card-body">
                            <div class="form-group">
                                <input type="email" class="form-control" v-model="formData.email" placeholder="E-mail">    
                            </div>

                            <div class="form-group">
                                <input type="password" class="form-control" v-model="formData.password" placeholder="Senha">
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-success">Acessar</button>
                            </div>
                        </div>

                    </div> <!-- card -->

                </form> <!-- form -->

            </div> <!-- col-md-8 -->

        </div> <!-- row justify-content-center -->
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            formData: {
                email: '',
                password: '',
            }
        }
    },

    methods: {
        login () {
            this.$store.dispatch('login', this.formData)
        }
    }
}
</script>
