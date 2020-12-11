import Vue from 'vue'

import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client'


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


const socket = io('http://localhost:3001',{
  transports : ['websocket'],
  withCredentials: false
});
 
Vue.use(VueSocketIOExt, socket, { store });




new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
