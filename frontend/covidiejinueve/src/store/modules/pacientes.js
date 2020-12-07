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
    },
    updatePacientes({commit,state},data){
      let result = pacientesApi.update(data);
      let position

      if(result){
        let user = state.pacientes.find((p, index) => {
          if(p.id === data.id){
            position = index
            return p
          }
        });
        if (user) {
            user.name = result.name;
            user.lastname = result.lastname,
            user.picture = result.picture;
        }

        let oldPacientes = state.pacientes
        oldPacientes[position] = user
        let newPacientes = oldPacientes
        commit('SET_PACIENTES', newPacientes) 
      }
      
      return result ? true : false
    },
    deletepaciente({commit,state},id){
        let status = pacientesApi.delete(id)
        if(status){
          commit('SET_PACIENTES', state.pacientes.filter( paci => paci.id != id)) 
        }
        return status;
    },
    create({commit,state},data){
      let result = pacientesApi.save(data);
      if(result){
        let pacientes = state.pacientes
        pacientes.unshift(result)
        commit('SET_PACIENTES', pacientes)
      }
      return result ? result : false
    }
  }
}