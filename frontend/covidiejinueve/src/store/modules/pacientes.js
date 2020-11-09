import pacientesApi from '@/api/pacientes'

export default {
  namespaced: true,
  state: {
    pacientes: []
  },
  mutations: {
     SET_PACIENTES(state,pacientes){
         state.pacientes = pacientes
     }
  },
  actions : {
    getPacientes({commit}){
       return pacientesApi.getPacientes()
            .then(data => {
                commit('SET_PACIENTES',data)
                return data;
            })
    }
  }
}