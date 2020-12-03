import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ContenedorChat from '@/components/Chat/ChatSidebar.vue'
//import moduloPacientes from '@/store/modules/pacientes.js'
//import moduloOauth from '@/store/modules/oauth.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Componente ChatSidebar.vue', () => {
  let state, actions, store
  
  beforeEach(() => {
    state = {
        userRole : "doctor"
    }
    actions = {
      'getPacientes' : jest.fn()
    },
    store = new Vuex.Store({
      modules: {
        pacientes:{
          actions
        },
        oauth:{
          state
        }
      }
    })
  })

  it('Cambia de contactos a chat', () => {
    const wrapper = shallowMount(ContenedorChat, {
      store, localVue
    })

    //wrapper.vm.toogleContacts = true

    expect(store.oauth.state.userRole.text()).toEqual("doctor");
  })
})
