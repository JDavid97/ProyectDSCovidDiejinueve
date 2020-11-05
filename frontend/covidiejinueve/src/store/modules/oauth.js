import oauthApi from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    user:null,
    loginFail:false
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    },
    SET_LOGINFALSE (state, payload){
        state.loginFail = payload
    }
  },
  actions: {
    login ( {commit}, user) {
        oauthApi.login(user)
            .then( (data)=>{
                commit('SET_USER', data.user)
            })
            .catch( () => {
                commit('SET_LOGINFALSE',true) 
            })
    }
  }
}