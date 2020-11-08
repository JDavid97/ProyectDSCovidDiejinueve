<template>
  <b-sidebar id="main-chat-sidebar" :title="nameUserChat" right shadow width="320px" no-slide>
      <div v-show="toogleContacts">
        <b-list-group>
          <Contact v-for="n in 10" v-bind:key="n" @click="toogle"></Contact>
        </b-list-group>
      </div>

      <div v-show="toogleChat">
        <MessageBox></MessageBox>
      </div>

      <template #footer>
        <div v-show="toogleChat">
          <div class="d-flex bg-light text-light align-items-center px-3 py-2">
            <b-form>
              <b-container>
                <b-row>
                  <b-col cols="8" class="chat-form-input">
                    <b-form-input ></b-form-input>
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
      nameUserChat : 'Chat',
      roleUserChat: ''
    }
  },
  computed:{
    toogleChat : function(){
      return !this.toogleContacts
    }
  },
  methods:{
    toogle: function(user){
      this.nameUserChat = user.name
      this.roleUserChat = user.role
      this.toogleContacts = !this.toogleContacts
    }
  }
}
</script>
