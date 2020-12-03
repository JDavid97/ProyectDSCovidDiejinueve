<template>
    <div>
        <b-navbar toggleable="false" type="dark" variant="primary" fixed="top">
            <b-navbar-brand href="#">Covid Diejinueve</b-navbar-brand>
                
            <b-navbar-toggle target="main-sidebar"></b-navbar-toggle>
                
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">
                    <b-img :src="profilePicture" rounded="circle" alt="profile picture" class="navbar-profile-picture"></b-img>
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    computed:{
        profilePicture(){
            return this.$store.state.oauth.userPicture
        }
    }
}
</script>