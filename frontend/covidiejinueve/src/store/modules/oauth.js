import oauthApi from '@/api/oauth'
import router from '@/routes/middle'

export default {
  namespaced: true,
  state: {
    userId : localStorage.getItem('userId') ? localStorage.getItem('userId') : null ,
    token : localStorage.getItem('token') ? localStorage.getItem('token') : null,
    userName : localStorage.getItem('userName') ? localStorage.getItem('userName') : null ,
    userLastName : localStorage.getItem('userLastName') ? localStorage.getItem('userLastName') : null ,
    userRole : localStorage.getItem('userRole') ? localStorage.getItem('userRole') : null ,
    userPicture : localStorage.getItem('userPicture') ? localStorage.getItem('userPicture') : null
  },
  mutations: {
    SET_USERID (state, payload) {
      state.userId = payload
    },
    SET_TOKEN (state, payload) {
      state.token = payload
    },
    SET_USERNAME (state, payload) {
      state.userName = payload
    },
    SET_USERLASTNAME (state, payload) {
      state.userLastName = payload
    },
    SET_USERROLE (state, payload) {
      state.userRole = payload
    },
    SET_USERPICTURE (state, payload) {
      state.userPicture = payload
    }
  },
  actions: {
    login ( {commit}, user) {
        return oauthApi.login(user)
            .then( (data)=>{
                localStorage.setItem('token', data.token)
                localStorage.setItem('userId', data.user.id)
                localStorage.setItem('userName', data.user.name)
                localStorage.setItem('userLastName', data.user.lastname)
                localStorage.setItem('userRole', data.user.role)
                localStorage.setItem('userPicture', data.user.picture)
                commit('SET_USERID', data.user.id)
                commit('SET_TOKEN', data.token)
                commit('SET_USERNAME', data.user.name)
                commit('SET_USERLASTNAME', data.user.lastname)
                commit('SET_USERROLE', data.user.role)
                commit('SET_USERPICTURE', data.user.picture)
            })
    },
    logout( {commit}){
      commit('SET_TOKEN', '')
      localStorage.setItem('token', '')
      router.push('/')
    }
  }
}