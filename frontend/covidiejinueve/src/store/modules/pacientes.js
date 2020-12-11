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
            }).catch(()=>{console.log("Error console log")})
    },
    updatePacientes({commit,state},data){
      let position
      pacientesApi.update(data).then(
        result => {
          if(result.status == 200){
            let user = state.pacientes.find((d, index) => {
              if(d.id === result.data.id){
                position = index
                return result.data
              }
            });
            if (user) {
                user.name = result.data.first_name;
                user.lastname = result.data.last_name,
                user.picture = result.data.picture;
            }
    
            let doctors = state.pacientes
            doctors[position] = user
            commit('SET_PACIENTES', doctors) 
            return true
          }else{
            return false
          }
        }
      )
    },
    deletepaciente({commit,state},id){
      pacientesApi.delete(id).then(()=>{
        commit('SET_PACIENTES', state.pacientes.filter( doc => doc.id != id)) 
      })
      return true;
    },
    create({commit,state},data){
      pacientesApi.save(data).then(result=>{
        if(result.data.user){
          let pacientes = state.pacientes
          var usuario = []
          usuario.id = result.data.user.id
          usuario.name = result.data.user.first_name
          usuario.lastname = result.data.user.last_name
          usuario.picture = result.data.user.picture
          pacientes.unshift(usuario)
          commit('SET_PACIENTES', pacientes)
          return true
        }else{
          return false
        }
      })
    }
  }
}