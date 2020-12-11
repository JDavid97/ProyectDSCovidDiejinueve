<template>
    <b-form @submit.prevent="onSubmit">
        <b-form-group id="input-name" label-for="nameField">
            <b-form-input
            id="nameField"
            v-model="form.name"
            required
            placeholder="Nombre"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-lastname" label-for="lastnameField">
            <b-form-input
            id="lastnameField"
            v-model="form.lastname"
            required
            placeholder="Apellido"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-email" label-for="emailField" v-if="type == 'create'">
            <b-form-input
            id="emailField"
            type="email"
            v-model="form.email"
            required
            placeholder="Email"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-password" label-for="passwordField" v-if="type == 'create'">
            <b-form-input
            id="passwordField"
            type="password"
            v-model="form.password"
            required
            placeholder="Contraseña"
            ></b-form-input>
        </b-form-group>


        <b-form-group id="input-picture" label-for="pictureField">
            <b-form-input
            id="pictureField"
            v-model="form.foto"
            placeholder="Foto de perfil"
            ></b-form-input>
        </b-form-group>


        <b-button variant="primary" type="submit">Guardar</b-button>
    </b-form>
</template>

<script>
export default {
    props:['type'],
    data(){
        return{
            form:{
                name:'',
                lastname:'',
                foto : null,
                email : null,
                password : ''
            }
        }
    },
    methods:{
        onSubmit: function(){
            this.$emit('updateFormulario',this.form)
        }
    }
}
</script>