<template>
  <b-sidebar id="main-chat-sidebar" :title="msgTo.nameUserChat" right shadow width="320px" no-slide>
      <div v-show="toogleContacts">
        <b-list-group>
          <Contact v-for="contact in contacts" v-bind:key="contact.id" @click="toogle" :contacto="contact"></Contact>
        </b-list-group>
      </div>

      <div v-show="toogleChat">
        <MessageBox @click="toogle" :chat="chat"></MessageBox>
      </div>

      <template #footer>
        <div v-show="toogleChat">
          <div class="d-flex bg-light text-light align-items-center px-3 py-2">
            <b-form v-on:submit.prevent="sendText">
              <b-container>
                <b-row>
                  <b-col cols="8" class="chat-form-input">
                    <b-form-input v-model="newMsg"></b-form-input>
                  </b-col>
                  <b-col cols="4" class="chat-form-submit">
                    <b-button type="submit" variant="primary">Enviar</b-button>
                  </b-col>
                </b-row>
              </b-container>
            </b-form>
          </div>
        </div>
      </template>
  </b-sidebar>
</template>

<script>
import Contact from './Contacts.vue'
import MessageBox from './MessageBox.vue'

export default {

  name : 'ChatSidebar',


  components:{
    Contact,
    MessageBox
  },
  data(){
    return{
      toogleContacts : true,
      msgTo:{
        nameUserChat:'Chat',
        userId:0
      },
      roleUserChat: '',

      newMsg : "",
      conected:false

    }
  },
  computed:{
    toogleChat : function(){
      return !this.toogleContacts

    },
    contacts: function(){
      return this.$store.state.chat.contacts
    },
    chat: function(){
      console.log('cambio el chat por', this.$store.state.chat.currentChat)
      return this.$store.state.chat.currentChat
    }
  },
   sockets: {
    connect() {
      this.conected = true
      console.log('socket connected')
      this.$socket.client.emit('oauth', {id:this.$store.state.oauth.userId});
    },
  }, 

  methods:{
    toogle: function(user){
      this.msgTo.nameUserChat = user.name
      this.msgTo.userId = user.id
      this.roleUserChat = user.role

      if(user.id != 0){ //si entro a un chat con alguien

        this.getMessages(user.id)
      }
      this.toogleContacts = !this.toogleContacts
    },
    getMessages: function(chatWithUserId){
      this.$store.dispatch('chat/getChat', {from:this.$store.state.oauth.userId, to:chatWithUserId})

    },
    sendText: function(){
      this.$store.commit('chat/SEND_MSG',{
        message:{
          from:this.$store.state.oauth.userId,

          to: this.msgTo.userId,
          message: this.newMsg
        },
        position: this.$store.state.chat.currentChat.position
      })
      this.newMsg = ""
    }
  },
  created(){
    this.$store.dispatch('chat/setContacts')

  }
}
</script>
