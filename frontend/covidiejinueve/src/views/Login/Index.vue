<template>
    <b-container class="login-layout">
        <b-row class="justify-content-md-center mt-5 mx-auto" align-v="center"  align-h="center">
            <b-col sm="8" xl="3" class="text-center">
                <h3>Login</h3>
                <b-form @submit.prevent="trylogin">
                    <b-form-group id="input-username" label-for="username">
                        <b-form-input
                        id="username"
                        v-model="form.username"
                        required
                        placeholder="Usuario"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-password" label-for="password">
                        <b-form-input
                        id="password"
                        type="password"
                        v-model="form.password"
                        required
                        placeholder="Contraseña"
                        ></b-form-input>
                    </b-form-group>

                    <b-alert v-model="loginFail" variant="danger" dismissible>
                        Usuario o contraseña incorrecta
                    </b-alert>

                    <b-button pill variant="primary" type="submit">Iniciar sesión</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name : 'LoginView',
    data() {
        return {
            form:{
                username : '',
                password : ''
            },
            failLogin:false
        }
    },
    computed:{
        loginFail(){
            return this.$store.state.oauth.loginFail
        }
    },
    methods:{
        trylogin: function(){
            console.log('Darle submit')
            this.$store.dispatch('oauth/login', this.form)
        }
    }
}
</script>

<style>
.login-layout .row{
    min-height: 25rem;
}
</style>