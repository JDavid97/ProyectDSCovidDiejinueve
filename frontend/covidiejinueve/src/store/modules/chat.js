import chatApi from '@/api/chat'

export default {
  namespaced: true,
  state: {
    chats:[]
  },
  mutations: {
   SET_CHATS(state, chats){
    let allChats = state.chats
    allChats.push(chats)
    state.chats = allChats
   }
  },
  actions:{
      getChat({commit}, fromTo ){
        return chatApi.getChat(fromTo.from, fromTo.to)
            .then( data => {
                commit('SET_CHATS',data)
                return data
            })
      }
  }
}