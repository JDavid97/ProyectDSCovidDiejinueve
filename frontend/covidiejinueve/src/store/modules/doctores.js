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
    },
    update({commit,state},data){
      let result = doctoresApi.update(data);
      let position

      if(result){
        let user = state.doctores.find((d, index) => {
          if(d.id === data.id){
            position = index
            return d
          }
        });
        if (user) {
            user.name = result.name;
            user.lastname = result.lastname,
            user.picture = result.picture;
        }

        let doctors = state.doctores
        doctors[position] = user
        commit('SET_DOCTORES', doctors) 
      }
      
      return result ? true : false
    },
    delete({commit,state},id){
        let status = doctoresApi.delete(id)
        if(status){
          commit('SET_DOCTORES', state.doctores.filter( doc => doc.id != id)) 
        }
        return status;
    },
    create({commit,state},data){
      let result = doctoresApi.save(data);
      if(result){
        let doctores = state.doctores
        doctores.unshift(result)
        commit('SET_DOCTORES', doctores)
      }
      return result ? result : false
    }
  }
}