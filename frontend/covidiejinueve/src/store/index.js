import Vue from 'vue'
import Vuex from 'vuex'

import oauth from './modules/oauth'
import maps from './modules/map'
import pacientes from './modules/pacientes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    oauth,
    maps,
    pacientes
  }
})