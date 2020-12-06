<template>
  <b-sidebar id="main-sidebar" title="Covid Diejinueve" bg-variant="dark" text-variant="light" right backdrop shadow>
      <div >
       <!-- <b-list-group>
            <b-list-group-item variant="dark">
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
        </b-list-group> -->
        <ul class="sidebar-menu">
            <li>
                <b-link to="/cvd/map"><BIconGeoAlt></BIconGeoAlt> Mapa</b-link>
            </li>
            <li v-if="role == 'admin'">
                <b-link to="/cvd/dashboard"><BIconBarChartFill></BIconBarChartFill> Dashboard</b-link>
            </li>
            <li v-if="role == 'admin'">
                <b-link to="/cvd/doctor"><BIconHeartFill></BIconHeartFill> Doctor</b-link>
            </li>
            <li v-if="adminOrDoc">
                <b-link to="/cvd/paciente"><BIconThermometerHalf></BIconThermometerHalf> Pacientes</b-link>
            </li>
            <li v-if="role == 'admin'">
                <b-link to="/cvd/admin"><BIconEmojiSunglasses></BIconEmojiSunglasses> Admin</b-link>
            </li>
            <li>
                <b-link v-on:click="close"><BIconDoorOpenFill></BIconDoorOpenFill> Cerrar sesión</b-link>
            </li>
        </ul>
      </div>
  </b-sidebar>
</template>

<script>
import { BIconGeoAlt,BIconBarChartFill, BIconHeartFill, BIconThermometerHalf, BIconEmojiSunglasses, BIconDoorOpenFill } from 'bootstrap-vue'

export default {
    components:{
        BIconGeoAlt,
        BIconBarChartFill,
        BIconHeartFill,
        BIconThermometerHalf,
        BIconEmojiSunglasses,
        BIconDoorOpenFill
    },
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