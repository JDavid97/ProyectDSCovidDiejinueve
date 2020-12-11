<template>
    <div>
        <b-navbar toggleable="false" type="dark" variant="primary" fixed="top">
            <b-navbar-brand href="#">Covid Diejinueve</b-navbar-brand>
                
            <b-navbar-toggle target="main-sidebar"></b-navbar-toggle>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">
                    <b-nav-item href="#"></b-nav-item>
                </b-nav-item>
            </b-navbar-nav>
            
            <b-nav-item-dropdown right>
                <template #button-content>
                    <b class="user-name">{{ name }} {{lastname}}</b>
                    <b-img :src="profilePicture" rounded="circle" alt="profile picture" class="navbar-profile-picture"></b-img>
                </template>
                <b-dropdown-item href="#">Perfil</b-dropdown-item>
                <b-dropdown-item v-on:click="close">Cerrar sesión</b-dropdown-item>
            </b-nav-item-dropdown>

        </b-navbar>
    </div>
</template>

<script>
export default {
    computed:{
        profilePicture(){
            return this.$store.state.oauth.userPicture
        },
        name(){
            return this.$store.state.oauth.userName
        },
        lastname(){
            return this.$store.state.oauth.userLastName
        },
    },
    methods:{
        close : function(){
            this.$store.dispatch('oauth/logout')
        }
    }
}
</script>