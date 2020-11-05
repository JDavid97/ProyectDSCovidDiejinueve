import oauthApi from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    user:null
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    }
  },
  actions: {
    login ( {commit}, user) {
        return oauthApi.login(user)
            .then( (data)=>{
                commit('SET_USER', data.user)
            })
    }
  }
}