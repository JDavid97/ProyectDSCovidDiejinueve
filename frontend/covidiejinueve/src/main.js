import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import socketio from 'socket.io-client'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'
import router from './routes/middle'
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/style.scss'

Vue.use(new VueSocketIO({
  debug: true,
  connection: socketio('http://localhost:3001',{
    transports : ['websocket', 'polling'],
    withCredentials: false
  }),
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
})) 

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
