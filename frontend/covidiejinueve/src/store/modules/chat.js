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
   },
   SEND_MSG(state, msg){
     state.chats[msg.position].push(msg.message)
   }
  },
  actions:{
      getChat({state, commit, rootState}, fromTo ){
        var posInChats;
        var inChat = state.chats.every( (chat, index) => {
          posInChats = index
          let search = chat.find(msgs => String(msgs.from) == rootState.oauth.userId & String(msgs.to) == fromTo.to)
          if (search == undefined) return true
          else return false
        })

    
        if(!inChat){
          return state.chats[posInChats]
        }
        else{
          return chatApi.getChat(fromTo.from, fromTo.to)
              .then( data => {
                  commit('SET_CHATS',data)
                  data.position = state.chats.length - 1
                  return data
              })
        }

      },
  }
}