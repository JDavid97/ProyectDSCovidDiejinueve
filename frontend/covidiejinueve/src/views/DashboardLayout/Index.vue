<template>
    <div>
        <NavBar></NavBar>

        <MainSidebar></MainSidebar>
        <Chat></Chat>

        <div class="main-panel">
            <DashboardContent> </DashboardContent>
        </div>
        
        <a class="icon-chat"> 
            <b-navbar-toggle target="main-chat-sidebar">
                <p class="h1 mb-2"><b-icon-mailbox class="icon-mail"></b-icon-mailbox></p>
            </b-navbar-toggle>
        </a>

        <Footer></Footer>
    </div>
</template>

<script>
import DashboardContent from "./Content.vue";
import MainSidebar from "../../components/Sidebar/Index.vue"
import Footer from "../../components/Footer/ContentFooter.vue"
import NavBar from "../../components/Navbar/Navbar.vue"
import Chat from "../../components/Chat/ChatSidebar.vue"
import { BIconMailbox } from 'bootstrap-vue'

export default {
    name : 'DashboardLayout',
    components:{
        DashboardContent,
        MainSidebar,
        Footer,
        NavBar,
        Chat,
        BIconMailbox
    }
}
</script>