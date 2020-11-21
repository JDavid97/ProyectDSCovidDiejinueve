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
   /* mounted(){
        var _this = this 
 
        if(this.$store.state.chat.chats.length == 0 ){
            console.log("Pedir datos",this.$store.state.oauth.userId,this.msgTo)
            this.$store.dispatch('chat/getChat', {from:this.$store.state.oauth.userId, to:this.msgTo})
                .then( data => {
                     let allChats = _this.chats 
                     this.chats = allChats.push(data)
                })
        }
        else{
            console.log("buscar en los chats, si no hacer una peticion")
        }
    } */
}
</script>