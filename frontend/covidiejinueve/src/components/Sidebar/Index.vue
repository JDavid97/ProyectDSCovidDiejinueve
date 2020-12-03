<template>
  <b-sidebar id="main-sidebar" title="Covid Diejinueve" right shadow>
      <div >
        <b-list-group>
            <b-list-group-item variant="light">
                <b-link to="/cvd/map">Map</b-link>
            </b-list-group-item>
            <b-list-group-item v-if="role == 'admin'">
                <b-link to="/cvd/dashboard">Dashboard</b-link>
            </b-list-group-item>
            <b-list-group-item v-if="role == 'admin'">
                <b-link to="/cvd/doctor">Doctor</b-link>
            </b-list-group-item>
            <b-list-group-item v-if="adminOrDoc">
                <b-link to="/cvd/paciente">Paciente</b-link>
            </b-list-group-item>
            <b-list-group-item v-if="role == 'admin'">
                <b-link to="/cvd/admin">Admin</b-link>
            </b-list-group-item>
            <b-list-group-item >
                <b-link v-on:click="close">Cerrar sesión</b-link>
            </b-list-group-item>
        </b-list-group>
      </div>
  </b-sidebar>
</template>

<script>
export default {
    computed :{
        role(){
            return this.$store.state.oauth.userRole
        },
        adminOrDoc(){
            return this.$store.state.oauth.userRole == "admin" || this.$store.state.oauth.userRole == "doctor"
        }
    },
    methods : {
        close : function(){
            this.$store.dispatch('oauth/logout')
        }
    }
}
</script>