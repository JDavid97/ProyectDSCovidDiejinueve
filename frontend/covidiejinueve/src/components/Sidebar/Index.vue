<template>
  <b-sidebar id="main-sidebar" title="Covid Diejinueve" bg-variant="dark" text-variant="light" right backdrop shadow>
      <div >
        <ul class="sidebar-menu">
            <li>
                <b-link to="/cvd/map">🗺️ Mapa</b-link>
            </li>
            <li v-if="role == 'Administrador'">
                <b-link to="/cvd/dashboard">📈 Dashboard</b-link>
            </li>
            <li v-if="role == 'Administrador'">
                <b-link to="/cvd/doctor">❤️ Doctor</b-link>
            </li>
            <li v-if="adminOrDoc">
                <b-link to="/cvd/paciente">🤒 Pacientes</b-link>
            </li>
            <li v-if="role == 'Administrador'">
                <b-link to="/cvd/admin">😎 Admin</b-link>
            </li>
            <li>
                <b-link v-on:click="close">📴 Cerrar sesión</b-link>
            </li>
        </ul>
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
            return this.$store.state.oauth.userRole == "Administrador" || this.$store.state.oauth.userRole == "Doctor"
        }
    },
    methods : {
        close : function(){
            this.$store.dispatch('oauth/logout')
        }
    }
}
</script>