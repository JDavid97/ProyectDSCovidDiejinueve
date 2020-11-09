<template>
    <b-card >
          <div class="fixed-top">
              <b-button block variant="outline-info" @click="toogle({name:'Chat',role:''})">
                <b-icon-arrow-left-short></b-icon-arrow-left-short>Contactos
              </b-button>
          </div>
          <Message type="success" message="Hola Querido"></Message>
          <Message type="success" message="Hola Querido"></Message>
          <Message type="info" message="Hola Querido"></Message>
          <Message type="info" message="Hola Querido"></Message>
          <Message type="success" message="Hola Querido"></Message>
          <Message type="success" message="Hola Querido"></Message>
    </b-card>
</template>

<script>
import Message from './Message.vue'
import { BIconArrowLeftShort } from 'bootstrap-vue'
export default {
    components:{
        Message,
        BIconArrowLeftShort
    }
}
</script>