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
      let result = adminsApi.update(data);
      let position

      if(result){
        let user = state.admins.find((d, index) => {
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

        let admins = state.admins
        admins[position] = user
        commit('SET_ADMINS', admins) 
      }
      
      return result ? true : false
    },
    delete({commit,state},id){
        let status = adminsApi.delete(id)
        if(status){
          commit('SET_ADMINS', state.admins.filter( admin => admin.id != id)) 
        }
        return status;
    },
    create({commit,state},data){
      let result = adminsApi.save(data);
      if(result){
        let admins = state.admins
        admins.unshift(result)
        commit('SET_ADMINS', admins)
      }
      return result ? result : false
    }
  }
}