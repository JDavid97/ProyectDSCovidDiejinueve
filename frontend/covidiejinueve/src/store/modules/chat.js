import chatApi from '@/api/chat'

export default {
  namespaced: true,
  state: {
    chats:[],
    contacts:[],
    currentChat:[]

  },
  mutations: {
   SET_CHATS(state, chats){
    let allChats = state.chats
    allChats.push(chats)
    state.chats = allChats
    console.log('Guardando chat')
    console.log(state.chats)
   },
   SET_CONTACTS(state,contacts){
     state.contacts = [...state.contacts, ...contacts]   
   },
   SEND_MSG(state, msg){
     let chats = state.chats
     let chat = state.chats[msg.position]
     chat[0].push(msg.message)
     chats[msg.position] = chat
     state.chats = chats
     this._vm.$socket.client.emit('send_message', msg);
   },
   RECIVE_MSG(state, msg){
     console.log('mensaje recibido:',msg)
     let chats = state.chats
     let chat = state.chats[msg.position]
     chat[0].push(msg.message)
     chats[msg.position] = chat
     state.chats = chats
   },
   SET_CURRENTCHAT(state, renderChat){
     console.log('renderizar el chat')
     console.info(renderChat)
     state.currentChat = renderChat
   }
  },
  actions:{
      socket_newMessage({commit, state,dispatch},msg){
          dispatch('serachInChats',msg.message.from)
            .then(pos => {
              var newChat = [] 
              console.log('lo encontro?: ',pos)
              if(pos){ //si lo encontro en los chats abiertos
                msg.position = pos.position
                newChat = msg
                console.log('Agregar mensaje a chat existente cuando se recibe:',newChat)
                commit('RECIVE_MSG',newChat)
              }
              else{ //si no lo encontro en los chats abiertos, se crea un chat para guardar el mensaje
                let addChat = []
                addChat[0] = [{from:msg.message.from, to: msg.message.to, timestamp: msg.message.timestamp,  message: msg.message.message}]
                addChat.position = state.chats.length
                console.log('Establecer chat cuando recibe y esta cerrado:',addChat)
                commit('SET_CHATS',addChat)
              }
              
            })
      },
      serachInChats({state,rootState},msgTo){ 
        var posInChats,
            inChat = true;
        
        if(state.chats.length > 0){
          console.log('buscar en: ',state.chats)
          inChat = state.chats.every( (chat, index) => {
            posInChats = index
            console.log('condicion de busqueda: ')
            
            let search = chat[0].find(msgs =>{
              console.log('para: '+String(msgs.from)+' == '+rootState.oauth.userId+' & '+String(msgs.to)+' == '+msgTo)
              return String(msgs.from) == rootState.oauth.userId & String(msgs.to) == msgTo || String(msgs.from) == msgTo & String(msgs.to) == rootState.oauth.userId
            })
            if (search == undefined) return true
            else return false
          })
        }

        if(!inChat){
          return {position:posInChats}
        }
        return false
      },
      getChat({state, commit, dispatch}, fromTo ){
        dispatch('serachInChats',fromTo.to)
          .then(chat =>{ 
            if(chat){
              console.log('Setiar current chat de los chats:',state.chats[chat.position])
              commit('SET_CURRENTCHAT',state.chats[chat.position])
              return state.chats[chat.position]
            }
            else{
              return chatApi.getChat(fromTo.from, fromTo.to)
                  .then( data => {
                      data.position = state.chats.length
                      if(data.length == 0){
                        data[0] = [{from:fromTo.from, to: fromTo.to, timestamp: '',  message: ""}]
                      }
                      console.log('Se trae de la api o se setea:',data)
                      commit('SET_CHATS',data)
                      commit('SET_CURRENTCHAT',data)
                      return data
                  })
            }
          })
      },
      setContacts({commit,dispatch, rootState}){

          var getContactsByType = (call) => {

           dispatch(call,null,{root:true})
              .then( data => {
                //let contactos = state.contacts
                //contactos.push(...data)
                commit('SET_CONTACTS',data)
              })
          }
          
          //if(rootState.oauth.userRole == "Administrador" || rootState.oauth.userRole == "Doctor"){
          if(rootState.oauth.userRole == "admin" || rootState.oauth.userRole == "doctor"){
            if(rootState.doctores.doctores.length > 0){
              commit('SET_CONTACTS',rootState.doctores.doctores)
            }
            else{
              getContactsByType('doctores/getDoctores')
            }

            if(rootState.pacientes.pacientes.length > 0){
              commit('SET_CONTACTS',rootState.pacientes.pacientes)
            }
            else{
              getContactsByType('pacientes/getPacientes')
            }
            
            if(rootState.admin.admins.length > 0){
              commit('SET_CONTACTS',rootState.admin.admins)
            }
            else{
              getContactsByType('admin/get')
            }
            
          }
          else{
            getContactsByType('doctores/getDoctores')
          }
      }
  }
}