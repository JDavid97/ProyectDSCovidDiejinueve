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
      contacts: [],
      chat:[],
      newMsg : ""
    }
  },
  computed:{
    toogleChat : function(){
      return !this.toogleContacts
    }
  },
  methods:{
    toogle: function(user){
      this.msgTo.nameUserChat = user.name
      this.msgTo.userId = user.id
      this.roleUserChat = user.role
      if(user.id != 0){
        this.getMessages(user.id)
      }
      this.toogleContacts = !this.toogleContacts
    },
    getMessages: function(chatWithUserId){
      this.$store.dispatch('chat/getChat', {from:this.$store.state.oauth.userId, to:chatWithUserId})
                .then( data => {
                     this.chat = data
                })
    },
    sendText: function(){
      this.$store.commit('chat/SEND_MSG',{
        message:{
          from:this.$store.state.oauth.userId,
          to: this.chat[0].to,
          message: this.newMsg
        },
        position: this.chat.position
        })
        this.newMsg = ""
    }
  },
  created(){
    //var _this = this
    
    var getContacts = { 
      paciente : 'doctores/getDoctores',
      doctor : 'pacientes/getPacientes'
    }

    var getContactsByType = (call) => {
       this.$store.dispatch(call)
         .then( data => {
           let contactos = this.contacts
           console.log(contactos)
           contactos.push(...data)
           console.log(contactos)

           this.contacts = contactos
         })
    }

    var callMethod = getContacts.paciente

    if(this.$store.state.oauth.userRole == "Doctor") callMethod = getContacts.doctor

    getContactsByType(callMethod)
  
    if(this.$store.state.oauth.userRole == "Administrador") getContactsByType(getContacts.doctor)
   
  }
}
</script>
