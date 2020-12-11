<template>
    <b-list-group-item class="d-flex align-items-center" v-on:click="clikedUser">
        <b-avatar variant="info" :src="contacto.picture" class="mr-3"></b-avatar>
        <span class="mr-auto">{{contacto.name}} {{contacto.lastname}}</span>
        <b-badge></b-badge>
    </b-list-group-item>
</template>

<script>
export default {
    props:['contacto'],
    methods:{
        clikedUser() {
          this.$emit("click", {
              id : this.contacto.id,
              name : this.contacto.name+' '+this.contacto.lastname, 
              role : this.contacto.role});
        }
    }
}
</script>