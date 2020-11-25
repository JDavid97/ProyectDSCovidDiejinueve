<template>
    <b-card >
          <div class="fixed-top">
              <b-button block variant="outline-info" @click="goToContacts">
                <b-icon-arrow-left-short></b-icon-arrow-left-short>Contactos
              </b-button>
          </div>
          <div class="messages-container mt-4">
            <Message v-for="(msg,index) in chat" v-bind:key="index" :from="msg.from" :message="msg.message"></Message>
          </div>
    </b-card>
</template>

<script>
import Message from './Message.vue'
import { BIconArrowLeftShort } from 'bootstrap-vue'
export default {
    props:['chat'],
    data(){
        return{
            chats : []
        }
    },
    components:{
        Message,
        BIconArrowLeftShort
    },
    methods:{
        goToContacts(){
            this.$emit("click", {id:0,name:'Chat',role:''});
        }
    },
    //Mover hasta abajo el chat cuando entre un mensaje
    updated(){
        var messageBox = document.getElementById('main-chat-sidebar')
        var bodyMessages = messageBox.getElementsByClassName('b-sidebar-body');
        bodyMessages[0].scrollTo(0, 1000);
    } 
}
</script>