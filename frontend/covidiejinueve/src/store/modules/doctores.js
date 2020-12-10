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
      let position
      doctoresApi.update(data).then(
        result => {
          console.log(result)
          if(result.status == 200){
            let user = state.doctores.find((d, index) => {
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
    
            let doctors = state.doctores
            doctors[position] = user
            commit('SET_DOCTORES', doctors) 
            return true
          }else{
            return false
          }
        }
      )
    },
    
    delete({commit,state},id){
        doctoresApi.delete(id).then(()=>{
          commit('SET_DOCTORES', state.doctores.filter( doc => doc.id != id)) 
        })
        return true;
    },

    create({commit,state},data){
      doctoresApi.save(data).then(result=>{
        console.log(result)
        if(result.data.user){
          let doctores = state.doctores
          var usuario = []
          usuario.id = result.data.user.id
          usuario.name = result.data.user.first_name
          usuario.lastname = result.data.user.last_name
          usuario.picture = result.data.user.picture
          doctores.unshift(usuario)
          commit('SET_DOCTORES', doctores)
          return true
        }else{
          return false
        }
      })
    }
  }
}