import doctoresApi from '@/api/doctores'

export default {
  namespaced: true,
  state: {
    doctores:[]
  },
  mutations: {
    SET_DOCTORES(state,doctores){
        state.doctores = doctores
    }
  },
  actions : {
    getDoctores({commit}){
        return doctoresApi.getDoctores()
            .then(data => {
                commit('SET_DOCTORES',data)
                return data;
            })
    }
  }
}