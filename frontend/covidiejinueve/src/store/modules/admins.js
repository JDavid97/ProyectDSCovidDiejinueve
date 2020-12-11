import adminsApi from '@/api/admin'

export default {
  namespaced: true,
  state: {
    admins:[]
  },
  mutations: {
    SET_ADMINS(state,newAdmins){
        state.admins = newAdmins
    }
  },
  actions : {
    get({commit}){
        return adminsApi.get()
            .then(data => {
                commit('SET_ADMINS',data)
                return data;
            })
    },

    update({commit,state},data){
      let position
      adminsApi.update(data).then(
        result => {
          console.log(result)
          if(result.status == 200){
            let user = state.admins.find((d, index) => {
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
            let administradores = state.admins
            administradores[position] = user
            commit('SET_ADMINS', administradores) 
            return true
          }else{
            return false
          }
        }
      )
    },

    delete({commit,state},id){
      adminsApi.delete(id).then(()=>{
        commit('SET_ADMINS', state.admins.filter( doc => doc.id != id)) 
      })
      return true;
    },

    create({commit,state},data){
      adminsApi.save(data).then(result=>{
        console.log(result)
        if(result.data.user){
          let admins = state.admins
          var usuario = []
          usuario.id = result.data.user.id
          usuario.name = result.data.user.first_name
          usuario.lastname = result.data.user.last_name
          usuario.picture = result.data.user.picture
          admins.unshift(usuario)
          commit('SET_ADMINS', admins)
          return true
        }else{
          return false
        }
      })
    }
  }
}