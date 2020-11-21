import Vue from 'vue'
import Vuex from 'vuex'

import oauth from './modules/oauth'
import maps from './modules/map'
import pacientes from './modules/pacientes'
import doctores from './modules/doctores'
import chat from './modules/chat'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    oauth,
    maps,
    pacientes,
    doctores,
    chat
  }
})