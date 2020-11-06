import oauthApi from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    user : null,
    token : localStorage.getItem('token') ? localStorage.getItem('token') : null 
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    },
    SET_TOKEN (state, payload) {
      state.token = payload
    }
  },
  actions: {
    login ( {commit}, user) {
        return oauthApi.login(user)
            .then( (data)=>{
                localStorage.setItem('token', data.token)
                commit('SET_USER', data.user)
                commit('SET_TOKEN', data.token)
            })
    }
  }
}