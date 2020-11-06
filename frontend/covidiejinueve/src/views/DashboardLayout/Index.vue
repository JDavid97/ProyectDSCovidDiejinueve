<template>
    <div>
        <div>
            <b-navbar toggleable="false" type="dark" variant="primary">
                <b-navbar-brand href="#">Covid Diejinueve</b-navbar-brand>
                    
                <b-navbar-toggle target="main-sidebar"></b-navbar-toggle>
                    
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">Usuario</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>

        <MainSidebar></MainSidebar>

        <div class="main-panel">
            <DashboardContent> </DashboardContent>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import DashboardContent from "./Content.vue";
import MainSidebar from "../../components/Sidebar/Index.vue"
import Footer from "../../components/Footer/ContentFooter.vue"
export default {
    name : 'DashboardLayout',
    components:{
        DashboardContent,
        MainSidebar,
        Footer
    }
}
</script>